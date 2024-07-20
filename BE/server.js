import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// import routes
import authRoutes from "./routes/auth.routes";

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log("Server started on port" + PORT);
});