require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const Port = process.env.PORT || 3001;

connectDB();

const allowedOrigins = process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",")
    : ["http://localhost:3000", "https://facebook-tau-seven.vercel.app"];

app.use(cors({
    origin: allowedOrigins,
}));

app.use(express.json());

app.use("/api", require("./routes/userRoute"));

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})
