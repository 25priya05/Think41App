const mongoose = require("mongoose");
const csv = require("csv-parser");
const fs = require("fs");
const Product = require("./models/Product");
const Department = require("./models/Department");

mongoose.connect("mongodb://127.0..0.1:27017/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const departmentsMap = new Map();

async function loadDepartmentsAndProducts() {
    const products = [];
    fs.createReadStream("server/data/products.csv")
        .pipe(csv())
        .on("data", async (row) => {
            let deptName = row.department.trim();
            if (!departmentsMap.has(deptName)) {
                const newDept = new Department({ name: deptName });
                await newDept.save();
                departmentsMap.set(deptName, newDept._id);
            }

            products.push({
                id: row.id,
                cost: parseFloat(row.cost),
                category: row.category,
                name: row.name,
                brand: row.brand,
                retail_price: parseFloat(row.retail_price),
                department: departmentsMap.get(deptName),
                sku: row.sku,
                distribution_center_id: parseInt(row.distribution_center_id),
            });
        })
        .on("end", async () => {
            await Product.insertMany(products);

            console.log("Products  and departments loaded!");
            mongoose.connection.close();
        });
}
loadDepartmentsAndProducts();
