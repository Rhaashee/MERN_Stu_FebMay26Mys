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

// To see the connection requests
function viewRequests() {
  return db.currentUser.requests;
}

// Accept / reject the request
function respondRequest(action) {
  const user = db.currentUser;
  const sender = user.requests.shift();

  if (!sender) return events.emit('operationFailed', 'No requests');

  if (action === 'accept') {
    user.connections.push(sender);
    events.emit('connectionAccepted');
  } else {
    events.emit('connectionRejected');
  }
}