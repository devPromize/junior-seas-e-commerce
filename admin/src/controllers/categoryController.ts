import { Request, Response } from "express";
import { fetchCategories } from "../services/categoryService.js";

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await fetchCategories();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to load categories" });
  }
};
