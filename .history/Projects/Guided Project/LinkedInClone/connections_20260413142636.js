const db = require('./data');
const events = require('./events');

function sendRequest(targetId) {
    const user = db.currentUser;
    const target = db.users.find(u => u.id === targetId);

    if (!target) return events.emit('operationFailed', 'User not found');
    if (target.id === user.id) return events.emit('operationFailed', 'Self request');

    target.requests.push(user.id);
    events.emit('connectionRequested');
}