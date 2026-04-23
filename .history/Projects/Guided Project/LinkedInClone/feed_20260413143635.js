const db = require('./data');
const events = require('./events');

function viewFeed() {
    const user = db.currentUser;

    const feed = db.posts.filter(p =>
        user.connections.includes(p.user)
    );

    events.emit('feedViewed');
    return feed;
}const store = require("./data");

async function viewFeed() {
    const user = store.currentUser;

    const feed = store.posts
        .filter(post => user.connections.includes(post.authorId))
        .sort((a, b) => b.timestamp - a.timestamp);

    return feed;
}

module.exports = { viewFeed };