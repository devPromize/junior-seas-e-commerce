import express from "express";
import upload from "../middleware/upload.js";
import { uploadImage } from "./../controllers/uploadController.js";

const router = express.Router();

// Async handler to catch errors in async route handlers
const asyncHandler = (fn: any) => (req: express.Request, res: express.Response, next: express.NextFunction) =>
  Promise.resolve(fn(req, res, next)).catch(next);

router.post("/upload", upload.single("image"), asyncHandler(uploadImage));

export default router;
// This file defines the upload routes for handling image uploads.
// It uses the multer middleware to handle file uploads and the uploadImage controller to process the uploaded