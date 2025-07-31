const mongoose = require("mongoose");

const productSchema = new
mongoose.Schema({
    id:Number,
    cost:Number,
    category:String,
    name:String,
    brand:String,
    retail_price:Number,
    department:String,
    sku:String,
    distribution_center_id:Number
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product;