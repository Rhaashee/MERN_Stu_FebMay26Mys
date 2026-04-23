// Add viewFeed function to display posts from connected users
const store = require("./data");
const eventEmitter = require("./events");

async function viewFeed() {
    try {
        const user = store.currentUser;
        if (!user) throw "Login required";

        const posts = store.posts.filter(p =>
            user.connections.includes(p.authorId)
        );

        posts.forEach(p => {
            const author = store.users.find(u => u.id === p.authorId);

            console.log("\n---");
            console.log("By:", author.name);
            console.log("Post:", p.content);
            console.log("Likes:", p.likes.length);
            console.log("Comments:", p.comments.length);
        });

        eventEmitter.emit("feedViewed");

    } catch (err) {
        eventEmitter.emit("operationFailed", err);
    }
}

module.exports = { viewFeed };