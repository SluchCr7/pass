const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const Port = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/userRoute"));

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})
