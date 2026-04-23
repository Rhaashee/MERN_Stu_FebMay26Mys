// Sorting limiting and Pagination 
const mongoose = require("mongoose");

async function sortPaginationDemo(){
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining");
                console.log("MongoDB connected successfully");

                const sortedAscending = await Product.find({category : "Laptop"}).sort({price:1});
                console.log("Sorted in Ascending order :", sortedAscending);
    } catch (error) {
        console.log("CRUD demo error:", error.message);
    }
}

runFilterDemo();