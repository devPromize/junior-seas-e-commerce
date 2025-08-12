import express from "express";
import { getFeedCarousel } from "../controllers/feedCarouselController";

const router = express.Router();

router.get("/", getFeedCarousel);

export default router;
