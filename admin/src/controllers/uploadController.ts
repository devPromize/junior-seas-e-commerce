// import { Request, Response } from "express";
// import fs from "fs";
// import imagekit from "../lib/imagekit.js"; // Use .js if you're using ESModule

// export const uploadImage = async (req: Request, res: Response) => {
//   const file = req.file;
//   if (!file) res.status(400).json({ error: "No file uploaded" });

//   try {
//     const uploadResponse = await imagekit.upload({
//       file: fs.readFileSync(file.path),
//       fileName: file.originalname,
//       folder: "/junior-seas", // optional folder on ImageKit
//     });

//     // Delete the temp file after upload
//     fs.unlinkSync(file.path);

//     res.status(200).json({
//       success: true,
//       imageUrl: uploadResponse.url,
//     });
//   } catch (error) {
//     console.error("Upload error:", error);
//     res.status(500).json({ error: "Image upload failed" });
//   }
// };


import { Request, Response } from "express";
import fs from "fs";
import imagekit from "../lib/imagekit.js";

interface MulterRequest extends Request {
  file: Express.Multer.File;
}

export const uploadImage = async (req: MulterRequest, res: Response) => {
  const file = req.file;
  if (!file) return res.status(400).json({ error: "No file uploaded" });

  try {
    const uploadResponse = await imagekit.upload({
      file: fs.readFileSync(file.path),
      fileName: file.originalname,
      folder: "/junior-seas", // optional
    });

    fs.unlinkSync(file.path); // remove temp file

    res.status(200).json({
      success: true,
      imageUrl: uploadResponse.url,
    });
  } catch (error) {
    console.error("Image upload failed:", error);
    res.status(500).json({ error: "Upload failed" });
  }
};
