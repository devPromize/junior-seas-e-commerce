// controllers/highlightsController.ts
import { Request, Response } from "express";
import { supabase } from "../lib/supabase.js";

export const getHighlights = async (req: Request, res: Response) => {
  const { section } = req.query;
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("highlight_section", section);

    if (error) throw error;

    res.status(200).json({ products: data });
  } catch (error) {
    res.status(500).json({ error: "Error fetching highlights" });
  }
};
