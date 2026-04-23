// Relationship Patterns 
const { text } = require('express');
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
        await Blog.deleteMany();

        const blog = await Blog.create({
            title:"Mongoose basics",
            comments:[
                {text:"Great article"},
                {text:"Helpful article"}
            ]
        });

        console.log("embedding: ");
        console.log(await Blog.find());

        // One-to-Many relation
        const postSchema = new mongoose.Schema({
            title:String
        });
        const commentSchema = new mongoose.Schema({
            text:String,
            post
        })

    } catch (error) {
        console.log("Error:",error.message);
    }
}