import { supabase } from "../lib/supabase.js"; // adjust path if needed

export const fetchFeedCarousel = async () => {
  const { data, error } = await supabase.from("feed_carousel").select("*");

  if (error) throw new Error("Failed to fetch feed carousel: " + error.message);

  return data;
};
