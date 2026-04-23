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

        const FirstProduct = new Student({
            name: "MAC_M5",
            price: Number,
            category: String,
            Status: String
        });
        console.log("Created new Product with create()",FirstProduct);

    }
}