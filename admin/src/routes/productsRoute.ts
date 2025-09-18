import express from "express";
import { getProducts, createProduct, updateProduct } from "../controllers/productController";

const router = express.Router();

// GET all products with filters
router.get("/", getProducts);

// Create new product (Admin only)
router.post("/", createProduct);

// Update product by ID
router.put("/:id", updateProduct);

export default router;
