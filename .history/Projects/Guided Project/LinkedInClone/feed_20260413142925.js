const db = require('./data');
const events = require('./events');

function viewFeed() {
    const user = db.currentUser;

    const feed = db.posts.filter(p =>
        user.connections.includes(p.user)
    );

    events.emit('feedViewed');
    return feed;
}