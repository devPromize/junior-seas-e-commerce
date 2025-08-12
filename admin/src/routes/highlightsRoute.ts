// routes/highlightsRoute.ts
import express from "express";
import { getHighlights } from "../controllers/highlightsController.js";

const router = express.Router();
router.get("/", getHighlights);
export default router;
