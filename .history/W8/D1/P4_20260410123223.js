// Sorting limiting and Pagination 
const mongoose = require("mongoose");

async function sortPaginationDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
        console.log("MongoDB connected successfully");

        await Product.create([
            { name: "MAC_M5(AIR)", price: 100000, category: "Electronic", status: "Active" },
            { name: "Iphone18", price: 120000, category: "Electronic", status: "In-Active" },
            { name: "Airpods_Pro", price: 20000, category: "Headphones", status: "Active" },
            { name: "Iwatch", price: 30000, category: "SmartWatch", status: "In-Active" }
        ]);

        const sortedAscending = await Product.find({ category: "Laptop" }).sort({ price: 1 });
        console.log("Sorted in Ascending order :", sortedAscending);
    } catch (error) {
        console.log("sort_Pagination Demo Error:", error.message);
    }
}
sortPaginationDemo();

