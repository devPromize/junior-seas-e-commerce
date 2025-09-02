import { supabase } from "../lib/supabase.js";

export const fetchHighlights = async (section: string) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("highlight_section", section);

  if (error) throw error;
  return data;
};