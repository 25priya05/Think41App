const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

mongoose
    .connect("mongoose://127.0.0.1:27017/ecommerce", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
