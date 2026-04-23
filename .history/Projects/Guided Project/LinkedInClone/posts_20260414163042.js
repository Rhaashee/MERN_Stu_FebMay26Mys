// Add createPost function to create and store user posts
const store = require("./data");
const eventEmitter = require("./events");

async function createPost(content) {
    try {
        if (!store.currentUser) throw "Login required";

        const post = {
            id: Date.now(),
            authorId: store.currentUser.id,
            content,
            likes: [],
            comments: []
        };

        store.posts.push(post);
        eventEmitter.emit("postCreated");

    } catch (err) {
        eventEmitter.emit("operationFailed", err);
    }
}

function likePost(id) {
    const post = store.posts.find(p => p.id == id);
    if (!post) return eventEmitter.emit("operationFailed","Post not found");

    post.likes.push(store.currentUser.id);
    eventEmitter.emit("postLiked");
}

function commentPost(id, text) {
    const post = store.posts.find(p => p.id == id);
    if (!post) return eventEmitter.emit("operationFailed","Post not found");

    post.comments.push({
        userId: store.currentUser.id,
        text
    });

    eventEmitter.emit("commentAdded");
}

module.exports = { createPost, likePost, commentPost };