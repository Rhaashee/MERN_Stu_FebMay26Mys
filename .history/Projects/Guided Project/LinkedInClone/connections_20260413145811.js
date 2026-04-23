const db = require('./data');
const events = require('./events');

function sendRequest(targetId) {

    const user = db.currentUser;
    const target = db.users.find(function (u) {
        return u.id === targetId;
    });

    if (!target) {
        events.emit('operationFailed', "User not found");
        return;
    }

    if (target.id === user.id) {
        events.emit('operationFailed', "Cannot connect yourself");
        return;
    }

    target.requests.push(user.id);
    events.emit('connectionRequested');
}

function viewRequests() {
    return db.currentUser.requests;
}

function respondRequest(action) {

    const user = db.currentUser;
    const senderId = user.requests.shift();

    if (!senderId) {
        events.emit('operationFailed', "No requests");
        return;
    }

    if (action === "accept") {
        user.connections.push(senderId);
        events.emit('connectionAccepted');
    } else {
        events.emit('connectionRejected');
    }
}

function viewConnections() {
    return db.currentUser.connections;
}

module.exports = {
    sendRequest,
    viewRequests,
    respondRequest,
    viewConnections
}; w