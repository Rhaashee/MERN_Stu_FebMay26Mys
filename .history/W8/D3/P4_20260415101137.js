// Basics of Embedding anf referencing
const mongoose = require("mongoose");

async function main(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema({
            product:String,
            price:Number
        });

        // Inside of userSchema we are embedding orderSchema
        const userSchema = new mongoose.Schema({
            name:String,
            orders:[orderSchema] // Embedded document
        });

        const User = mongoose.model('User',userSchema);
        const embeddedUser = await User.create({
            name:"Rhaashee",
            orders:[
                {product:"Laptop",price:50000},{product:"Printer",price:10000},{product:"Projector",price:70000}
            ]
        })

        // fetch one user data 
        // console.log("User Created :",embeddedUser); 
        // fetches all the user data in user model
        console.log("Users created:\n");


    } catch (error) {
        console.log("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();
