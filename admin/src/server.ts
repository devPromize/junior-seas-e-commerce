// src/server.ts
import dotenv from 'dotenv';
import app from "./app.js";
import uploadRoutes from "./routes/uploadRoutes.js";


dotenv.config();

const PORT = parseInt(process.env.PORT || "5000", 10);


app.use("/api", uploadRoutes);



app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT} 🚀 Server running at http://0.0.0.0:${PORT}`);
});
// This is the entry point for the server application.
// It imports the necessary modules, loads environment variables using dotenv,
// and starts the Express server on the specified port.