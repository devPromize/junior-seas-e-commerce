import { supabase } from "../lib/supabase.js";

export const fetchCategories = async () => {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) throw new Error("Failed to fetch categories: " + error.message);
  return data;
};
