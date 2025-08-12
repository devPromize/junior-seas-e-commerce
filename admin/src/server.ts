// src/server.ts
import dotenv from 'dotenv';
import app from "./app.js";
import uploadRoutes from "./routes/uploadRoutes.js";


dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api", uploadRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
// This is the entry point for the server application.
// It imports the necessary modules, loads environment variables using dotenv,
// and starts the Express server on the specified port.