const express = require("express");
const router = express.Router();
const Department = require("../models/Department");
const Product = require("../models/Product");
const { route } = require("./productRoutes");


router.get("/",async(req,res)=>{
    try{
        const departments = await Department.find();
        const result = await Promise.all(
            departments.map(async (dept) => {
                const count = await
                Product.countDocuments({department:dept._id});
                return {
                    id:dept_id,
                    name:dept.name,
                    product_count:count,
                };

    })
        );
        res.status(200).json({departments:result});
        }catch(err){
            res.status(500).json({message:"server error",error:err.message});
        }
    });

    router.get("/:id",async(req,res)=>{
        try{
            const departments = await Department.findById(req.params.id);
            if(!departments){
                return res.status(404).json({message:"department not found"});
                }
                res.status(200).json(department);
            }
            catch(err){
                res.status(500).json({message:"server error",error:err.message});
                }
    });

    router.get("/:id/products",async(req,res)=>{
        try{
            const department = await Department.findById(req.params.id);
            if(!department){
                return res.status(404).json({message:"department not found"});
                }
                const products = await Product.find({department:department._id});
                res.status(200).json(products);
                }
                catch(err){
                    res.status(500).json({message:"server error",error:err.message});
                    }
                    
    });

    module.exports = router;
