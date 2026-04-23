const store = require("./data");
const eventEmitter = require("./events");

function createPost(content) {
    return new Promise((resolve, reject) => {

        if (!store.currentUser) return reject("Login required");

        const post = {
            id: Date.now(),
            authorId: store.currentUser.id,
            content,
            time: new Date()
        };

        store.posts.push(post);

        eventEmitter.emit("postCreated");
        resolve(post);
    });
}

module.exports = { createPost };