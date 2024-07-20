import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";
import userRoutes from "./routes/user.routes.js";

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

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// import routes


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log("Server started on port!" + PORT);
});

// error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})