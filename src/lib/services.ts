import { createClient } from "@/lib/supabase/server";

export type ServiceCategory = "mc" | "publicite" | "emission";

export type PublicService = {
  category: ServiceCategory;
  hero_title: string | null;
  hero_description: string | null;
  block1_title: string | null;
  block1_description: string | null;
  block1_image_url: string | null;
  block2_title: string | null;
  block2_description: string | null;
  block2_video_url: string | null;
};

export async function getPublicService(category: ServiceCategory) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("services")
    .select(
      "category, hero_title, hero_description, block1_title, block1_description, block1_image_url, block2_title, block2_description, block2_video_url"
    )
    .eq("category", category)
    .maybeSingle()
    .returns<PublicService>();

  if (error) {
    throw new Error(
      `Impossible de charger le service « ${category} » depuis Supabase : ${error.message}`
    );
  }

  return data;
}
