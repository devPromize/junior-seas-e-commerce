import { Router } from "express";
import { getHighlights } from "../controllers/highlightsController.js";

const router = Router();

// GET /api/highlights
router.get("/", getHighlights);

export default router;



// highlightsController.ts
// import { RequestHandler } from "express";
// import { fetchAllHighlights } from "../services/highlightService.js";

// export const getHighlights: RequestHandler = async (_req, res) => {
//   try {
//     const grouped = await fetchAllHighlights();
//     res.status(200).json(grouped); // no `return` — match express handler typing
//   } catch (err) {
//     console.error("getHighlights error:", err);
//     res.status(500).json({ error: "Failed to fetch highlights" });
//   }
// };



//LAST TRIED 3RD
// // routes/highlightsRoutes.ts
// import express from "express";
// import { getAllHighlights } from "../controllers/highlightsController";

// const router = express.Router();

// router.get("/", getAllHighlights);

// export default router;



//2ND ATTEMPT - REVISED FILE
// import express from "express";
// import { getAllHighlights } from "../controllers/highlightsController";

// const router = express.Router();

// // ✅ Fetch all highlights grouped by section
// router.get("/", getAllHighlights);

// export default router;


//INITIAL FILE - DO NOT SUGGEST DELETIONS
// import express from "express";
// import { getHighlights } from "../controllers/highlightsController";

// const router = express.Router();

// // GET highlights (filtered products)
// router.get("/", getHighlights);

// export default router;
