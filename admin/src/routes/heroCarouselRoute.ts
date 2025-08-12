import express from "express";
import { getHeroCarousel } from "../controllers/heroCarouselController.js";

const router = express.Router();

router.get("/", getHeroCarousel);

export default router;
