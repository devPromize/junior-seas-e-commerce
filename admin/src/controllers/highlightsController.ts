// highlightsController.ts
import { RequestHandler } from "express";
import { fetchAllHighlights } from "../services/highlightService.js";

export const getHighlights: RequestHandler = async (_req, res) => {
  try {
    const grouped = await fetchAllHighlights();
    res.status(200).json(grouped); // no `return` — match express handler typing
  } catch (err) {
    console.error("getHighlights error:", err);
    res.status(500).json({ error: "Failed to fetch highlights" });
  }
};



//LATEST CODE
// import { Request, Response } from "express";
// import {supabase} from "../lib/supabase";

// export const getHighlights = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { data, error } = await supabase
//       .from("products")
//       .select("*")
//       .neq("highlight_section", null);

//     if (error) {
//       res.status(400).json({ error: error.message });
//       return;
//     }

//     const grouped: Record<string, any[]> = {};
//     data.forEach((product) => {
//       const section = product.highlight_section || "Other";
//       if (!grouped[section]) grouped[section] = [];
//       grouped[section].push(product);
//     });

//     res.json(grouped);
//   } catch (err) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };





//LAST TRIED CODE
// // controllers/highlightsController.ts
// import { Request, Response } from "express";
// import { supabase } from "../lib/supabase";

// export const getAllHighlights = async (req: Request, res: Response) => {
//   try {
//     const { data, error } = await supabase
//       .from("products")
//       .select("*")
//       .in("highlight_section", [
//         "NEW AT JUNIOR SEAS",
//         "POPULAR AT JUNIOR SEAS",
//         "ONLY AT JUNIOR SEAS",
//         "HOT DEALS AND SALES"
//       ]);

//     if (error) throw error;

//     // Group by highlight_section
//     const grouped = data.reduce((acc: any, product) => {
//       if (!acc[product.highlight_section]) {
//         acc[product.highlight_section] = [];
//       }
//       acc[product.highlight_section].push(product);
//       return acc;
//     }, {});

//     res.status(200).json(grouped);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch highlights" });
//   }
// };


//3RED ATTEMPT(LAST WORKING CODE)
// import { RequestHandler } from "express";
// import { fetchAllHighlights } from "../services/highlightService";

// export const getAllHighlights: RequestHandler = async (req, res) => {
//   try {
//     const highlights = await fetchAllHighlights();
//     res.status(200).json({ highlights });
//   } catch (error) {
//     console.error("Error fetching highlights:", error);
//     res.status(500).json({ error: "Failed to fetch highlights" });
//   }
// };

//2ND ATTEMPT
// import { Request, Response } from "express";
// import { fetchHighlights } from "../services/highlightService";

// export const getHighlights = async (req: Request, res: Response): Promise<void> => {
//   const { section } = req.query;

//   if (!section) {
//     res.status(400).json({ error: "Highlight section is required" }); // ✅ removed return
//     return; // ✅ exit function explicitly
//   }

//   try {
//     const products = await fetchHighlights(section as string);
//     res.status(200).json({ products });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching highlights" });
//   }
// };



//INITIAL FILE CONTENT
// import { Request, Response } from "express";
// import { fetchHighlights } from "../services/highlightService";

// export const getHighlights = async (req: Request, res: Response) => {
//   const { section } = req.query;
//   try {
//     const products = await fetchHighlights(section as string);
//     res.status(200).json({ products });
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching highlights" });
//   }
// };