const store = require("./data");

function getFeed() {
    if (!store.currentUser) return [];

    return store.posts.filter(post =>
        store.currentUser.connections.includes(post.authorId)
    );
}

module.exports = { getFeed };