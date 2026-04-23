
const store = require("./data");

async function viewFeed() {
    const user = store.currentUser;

    const feed = store.posts
        .filter(post => user.connections.includes(post.authorId))
        .sort((a, b) => b.timestamp - a.timestamp);

    return feed;
}

module.exports = { viewFeed };