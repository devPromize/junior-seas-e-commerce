import { supabase } from "../lib/supabase.js"; // adjust path if needed

export const fetchHeroCarousel = async () => {
  const { data, error } = await supabase.from("hero_carousel").select("*");

  if (error) throw new Error("Failed to fetch hero carousel: " + error.message);

  return data;
};
