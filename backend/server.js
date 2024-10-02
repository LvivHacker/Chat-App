import express from "express";
import dotenv from "dotenv";
const app = express();

import authRoutes from "./Routes/auth.routes.js"

dotenv.config();  // Load environment variables
const PORT = process.nextTick.PORT || 5001;

app.get('/', (req,res) => {
    res.send("Messanger API is running!");
})

// ------------------------------------------------
//                   API functions 
// ------------------------------------------------
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);;
});