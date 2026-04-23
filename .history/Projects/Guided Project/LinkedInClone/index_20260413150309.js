const events = require('./events');

const { createProfile, viewMyProfile, viewOtherProfiles } = require('./user');
const { addSkill } = require('./profile');
const { sendRequest, respondRequest } = require('./connections');
const { createPost } = require('./posts');
const { viewFeed } = require('./feed');

events.emit('sessionStarted');

// Step 1
createProfile("Rhaashee");

// Step 2
addSkill("Node.js");

// Step 3
createProfile("Friend");

// Step 4
let others = viewOtherProfiles();
sendRequest(others[0].id);

// Step 5
respondRequest("accept");

// Step 6
createPost("Hello LinkedIn");

// Step 7
console.log(viewFeed());