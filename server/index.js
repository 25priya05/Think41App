const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
const departmentRoutes = require('./routes/departmentRoutes');
app.use('/api/departments',departmentRoutes);

mongoose
    .connect(
        "mongodb+srv://think41user:think41pass@cluster0.dz7cl.mongodb.net/ecommerce?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
