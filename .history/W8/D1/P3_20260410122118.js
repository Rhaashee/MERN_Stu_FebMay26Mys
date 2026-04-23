// Applied filters to the query using comparison operators 
const mongoose = require("mongoose");

async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,
            status: String
        });

        const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

        await Product.create([
            { name: "MAC_M5(AIR)", price: 100000, category: "Laptop", status: "Active" },
            { name: "Iphone18", price: 120000, category: "Mobile-Phone", status: "In-Active" },
            { name: "Airpods_Pro", price: 20000, category: "Headphones", status: "Active" },
            { name: "Iwatch", price: 30000, category: "SmartWatch", status: "In-Active" }
        ]);

        const equalQuery = await Product.find({ status: { $eq: "Active" } });
        // console.log("Active products:", equalQuery);

        const greaterQuery = await Product.find({ price: { $gt: 15000 } });
        // console.log("Above ₹15000:", greaterQuery);

        const lesserQuery = await Product.find({ price: { $lt: 100000 } });
        console.log("lesser than ₹100000:", lesserQuery);

        const notEqualQuery = await Product.find({ price: { $ne: 30000 } });
        console.log("Not ₹30000:", notEqualQuery);

        await mongoose.connection.close();
        console.log("connection closed");

    } catch (error) {
        console.log("CRUD demo error:", error.message);
    }
}

runFilterDemo();