import { createClient } from "@supabase/supabase-js";

const requestTimeoutMs = 8_000;
const responseHeaders = { "Cache-Control": "no-store" };

function unavailableResponse() {
  return Response.json(
    { success: false, status: "degraded", error: "Supabase est temporairement indisponible." },
    { headers: responseHeaders },
  );
}

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("La vérification keep-alive échoue : configuration Supabase manquante.");
    return Response.json(
      { success: false, status: "degraded", error: "Configuration Supabase indisponible." },
      { headers: responseHeaders },
    );
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        fetch: (input, init) =>
          fetch(input, {
            ...init,
            signal: AbortSignal.timeout(requestTimeoutMs),
          }),
      },
    });
    const { error } = await supabase.from("services").select("id").limit(1);

    if (error) {
      console.error("La vérification de disponibilité Supabase a échoué:", error);
      return unavailableResponse();
    }

    return Response.json(
      { success: true, status: "ok" },
      { headers: responseHeaders },
    );
  } catch (error) {
    console.error("La vérification keep-alive a échoué:", error);
    return unavailableResponse();
  }
}
