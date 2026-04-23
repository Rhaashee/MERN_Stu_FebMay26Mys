const db = require('./data');
const events = require('./events');

function createProfile(name) {

  // Check if name is empty
  if (!name) {
    console.log("❌ Please enter a valid name");
    return;
  }

  // Check if user already exists (Login case)
  let existingUser = db.users.find(function(user) {
    return user.name === name;
  });

  if (existingUser) {
    db.currentUser = existingUser;
    console.log("🔁 Logged in successfully");
    return existingUser;
  }

  // Step 3: Create new user (Profile creation)
  let newUser = {
    id: Date.now().toString(),
    name: name,
    headline: "",
    skills: [],
    experience: [],
    education: [],
    connections: [],
    requests: []
  };

  // Step 4: Store user in database
  db.users.push(newUser);

  // Step 5: Set current user (session)
  db.currentUser = newUser;

  // Step 6: Trigger event
  events.emit('profileCreated');

  // Step 7: Return user
  return newUser;
}

module.exports = { createProfile };