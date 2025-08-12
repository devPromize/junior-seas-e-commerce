import { Request, Response } from "express";
import { fetchHeroCarousel } from "../services/heroCarouselService.js";

export const getHeroCarousel = async (req: Request, res: Response) => {
  try {
    const slides = await fetchHeroCarousel();
    res.status(200).json({ success: true, slides });
  } catch (error) {
    console.error("Hero carousel fetch error:", error);
    res.status(500).json({ success: false, message: "Failed to load hero carousel" });
  }
};
