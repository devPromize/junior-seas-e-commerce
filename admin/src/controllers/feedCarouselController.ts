import { Request, Response } from "express";
import { fetchFeedCarousel } from "../services/feedCarouselService";

export const getFeedCarousel = async (req: Request, res: Response) => {
  try {
    const slides = await fetchFeedCarousel();
    res.status(200).json({ success: true, slides });
  } catch (error) {
    console.error("Hero carousel fetch error:", error);
    res.status(500).json({ success: false, message: "Failed to load hero carousel" });
  }
};
