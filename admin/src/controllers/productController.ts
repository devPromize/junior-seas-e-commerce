import { Request, Response } from "express";
import {
  fetchProducts,
  createProduct as createProductService,
  updateProduct as updateProductService,
} from "../services/productService";

export const getProducts = async (req: Request, res: Response) => {
  try {
    // ✅ Parse & sanitize query params
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;
    const category = req.query.category ? String(req.query.category) : undefined;
    
    const price_min = req.query.price_min ? parseInt(req.query.price_min as string, 10) : undefined;
    const price_max = req.query.price_max ? parseInt(req.query.price_max as string, 10) : undefined;
    const ram = req.query.ram ? String(req.query.ram) : undefined;
    const rom = req.query.rom ? String(req.query.rom) : undefined;
    const color = req.query.color ? String(req.query.color) : undefined;
    const search = req.query.search ? String(req.query.search) : undefined;

    // ✅ Default sort fallback
    const sortBy = req.query.sortBy ? String(req.query.sortBy) : "created_at";
    let sortOrder: "asc" | "desc" = "desc";
    if (req.query.sortOrder === "asc" || req.query.sortOrder === "desc") {
      sortOrder = req.query.sortOrder;
    }

    // ✅ Call service with clean params
    const { data, count } = await fetchProducts({
      page,
      limit,
      category,
      price_min,
      price_max,
      ram,
      rom,
      color,
      search,
      sortBy,
      sortOrder,
    });

    // ✅ Respond safely
    res.status(200).json({
      products: data,
      total: count ?? 0,
      page,
      limit,
      totalPages: count ? Math.ceil(count / limit) : 1,
    });
  } catch (error) {
    console.error("❌ Error in getProducts controller:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const newProduct = await createProductService(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await updateProductService(id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating product" });
  }
};


//LAST LAST WORKING CONTROLLER
// import { Request, Response } from "express";
// import {
//   fetchProducts,
//   createProduct as createProductService,
//   updateProduct as updateProductService,
// } from "../services/productService";

// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const {
//       page,
//       limit,
//       category,
//       price_min,
//       price_max,
//       ram,
//       rom,
//       color,
//       search,
//       sortBy,
//       sortOrder,
//     } = req.query;

//     const { data, count } = await fetchProducts({
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       category: category as string,
//       price_min: price_min ? Number(price_min) : undefined,
//       price_max: price_max ? Number(price_max) : undefined,
//       ram: ram as string,
//       rom: rom as string,
//       color: color as string,
//       search: search as string,
//       sortBy: sortBy as string,
//       sortOrder: sortOrder as "asc" | "desc",
//     });

//     res.status(200).json({
//       products: data,
//       total: count,
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       totalPages: Math.ceil((count || 0) / (limit ? Number(limit) : 20)),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error fetching products" });
//   }
// };

// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     const productData = req.body;
//     const newProduct = await createProductService(productData);
//     res.status(201).json(newProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error creating product" });
//   }
// };

// export const updateProduct = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const updatedProduct = await updateProductService(id, req.body);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error updating product" });
//   }
// };


//SECOND PRODUCT CONTROLLER
//  import { Request, Response } from "express";
//  import { fetchProducts } from "../services/productService";
//  import { createProduct as createProductService, updateProduct as updateProductService } from "../services/productService";

// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     const {
//       page,
//       limit,
//       category,
//       price_min,
//       price_max,
//       ram,
//       rom,
//       search,
//       sortBy,
//       sortOrder,
//     } = req.query;

//     const { data, count } = await fetchProducts({
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       category: category as string,
//       price_min: price_min ? Number(price_min) : undefined,
//       price_max: price_max ? Number(price_max) : undefined,
//       ram: ram as string,
//       rom: rom as string,
//       search: search as string,
//       sortBy: sortBy as string,
//       sortOrder: sortOrder as "asc" | "desc",
//     });

//     res.status(200).json({
//       products: data,
//       total: count,
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       totalPages: Math.ceil((count || 0) / (limit ? Number(limit) : 20)),
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching products" });
//   }
// };

// //Create Product Controller
// export const createProduct = async (req: Request, res: Response) => {
//   try {
//     const productData = req.body;
//     const newProduct = await createProductService(productData);
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating product" });
//   }
// };

// //Update Product Controller
// export const updateProduct = async (req: Request, res: Response) => {
//   try {
//     const productId = req.params.id;
//     const productData = req.body;
//     const updatedProduct = await updateProductService(productId, productData);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ error: "Error updating product" });
//   }
// };


//INITIAL PRODUCT CONTROLLER
// export const getProducts = async (req: Request, res: Response) => {
//   try {
//     console.log("Incoming Query Params:", req.query);

//     const {
//       page,
//       limit,
//       category,
//       price_min,
//       price_max,
//       ram,
//       rom,
//       search,
//       sortBy,
//       sortOrder,
//     } = req.query;

//     console.log("Processed Params:", {
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       category,
//       price_min,
//       price_max,
//       ram,
//       rom,
//       search,
//       sortBy,
//       sortOrder,
//     });

//     const { data, count } = await fetchProducts({
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       category: category as string,
//       price_min: price_min ? Number(price_min) : undefined,
//       price_max: price_max ? Number(price_max) : undefined,
//       ram: ram as string,
//       rom: rom as string,
//       search: search as string,
//       sortBy: sortBy as string,
//       sortOrder: sortOrder as "asc" | "desc",
//     });

//     console.log("Supabase Response:", { data, count });

//     res.status(200).json({
//       products: data,
//       total: count,
//       page: page ? Number(page) : 1,
//       limit: limit ? Number(limit) : 20,
//       totalPages: Math.ceil((count || 0) / (limit ? Number(limit) : 20)),
//     });
//   } catch (error) {
//     console.error("Error in getProducts:", error);
//     res.status(500).json({ error: "Error fetching products" });
//   }
// };
