// Relationship Patterns 
const mongoose = require('mongoose');
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        // One-to-Many
        const blogsSchema = new mongoose.Schema({
            title:String,
            comments:[
                {
                    text:String
                }
            ]
        });
        const Blog = mongoose.model('Blog',blogsSchema);
        await Blog.deleteMany()
    } catch (error) {
        
    }
}