import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error } = await supabase.from("profiles").select("id").limit(1);

  if (error) {
    console.error("La vérification de disponibilité Supabase a échoué:", error);
    return Response.json({ error: "Échec de la vérification Supabase." }, { status: 500 });
  }

  return Response.json({ success: true });
}
