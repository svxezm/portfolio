import { supabase } from "@lib/supabase";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id");

  if (error) {
    console.error("Failed to fetch projects.", error);
    return [];
  }
  return data;
};

export async function getMessages(locale: string) {
  const { data, error } = await supabase
    .from("translations")
    .select("data")
    .eq("name", locale)
    .single();

  if (error) {
    console.error("Failed to fetch translations.", error);
    return {};
  }
  return data.data;
};

export function getImage(path: string) {
  const data = supabase.storage
    .from("images")
    .getPublicUrl(path);

  return data.data.publicUrl;
}
