const events = require('./services/events');

const { createProfile, viewMyProfile, viewOtherProfiles } = require('./services/userService');
const { addSkill } = require('./services/profileService');
const { sendRequest, respondRequest } = require('./services/connectionService');
const { createPost } = require('./services/postService');
const { viewFeed } = require('./services/feedService');

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