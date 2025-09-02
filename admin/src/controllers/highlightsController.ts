import { Request, Response } from "express";
import { fetchHighlights } from "../services/highlightService";

export const getHighlights = async (req: Request, res: Response) => {
  const { section } = req.query;
  try {
    const products = await fetchHighlights(section as string);
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: "Error fetching highlights" });
  }
};