// 
const mongoose = require("mongoose");

async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,
            Status: String
        });

        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

        const FirstProduct = await Product.create({
            name: "MAC_M5(AIR)",
            price: 100000,
            category: "Laptop",
            Status: "Active"
        },{
            name: "Iphone!8",
            price: 100000,
            category: "Laptop",
            Status: "Active"
        });
        console.log("Created new Product with create()",FirstProduct);
    }catch(error){
        console.log("CRUD demo error :",error.message);
    }
}