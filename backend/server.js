const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const demoRoutes = require("./routes/demoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/demo", demoRoutes);

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("Warning: MONGO_URI environment variable is not defined.");
} else {
    mongoose
        .connect(MONGO_URI)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.error("MongoDB Connection Error:", err.message));
}

module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}