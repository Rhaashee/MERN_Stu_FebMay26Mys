const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('sessionStarted', () => console.log('Session Started'));
emitter.on('profileCreated', () => console.log('Profile Created'));
emitter.on('profileUpdated', () => console.log('Profile Updated'));
emitter.on('connectionRequested', () => console.log('Request Sent'));
emitter.on('connectionAccepted', () => console.log('Accepted'));
emitter.on('connectionRejected', () => console.log('Rejected'));
emitter.on('postCreated', () => console.log('Post Created'));
emitter.on('postLiked', () => console.log('Post Liked'));
emitter.on('commentAdded', () => console.log('Comment Added'));
emitter.on('feedViewed', () => console.log('Feed Viewed'));
emitter.on('operationFailed', (msg) => console.log('Error:', msg));

module.exports = emitter;