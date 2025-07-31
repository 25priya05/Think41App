const fs = require("fs");
const csv = require("csv-parser");
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://127.0..0.1:27017/ecommerce",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>console.log("Mongodb connected"))
  .catch(err => console.log("Mongodb connection error",err));

  const results = [];

  fs.createReadStream("data/products.csv")
    .pipe(csv())
    .on("data",(data)=>{
        results.push({
            id:Number(data.id),
            cost:Number(data.cost),
            category:data.category,
            name:data.name,
            brand:data.brand,
            retail_price:Number(data.retail_price),
            department:data.department,
            sku:data.sku,
            distribution_center_id:Number(data.distribution_center_id)

        });
    })
    .on("end",async ()=>{
        try{
            await Product.deleteMany({});
            await Product.insertMany(results);
            Product.insertMany(results);
            console.log("Products inserted successfully!");

        }
        catch(error){
            console.error("failed to insert Products:",error);

        }
        finally{
            mongoose.disconnect();
        }
    });