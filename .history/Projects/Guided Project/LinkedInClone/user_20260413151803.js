const db = require('./data');
const events = require('./events');

function createProfile(name) {

  if (!name) {
    events.emit('operationFailed', "Invalid name");
    return;
  }

  let user = db.users.find(function(u) {
    return u.name === name;
  });

  if (user) {
    db.currentUser = user;
    console.log("Login successful");
    return user;
  }

  user = {
    id: Date.now().toString(),
    name: name,
    headline: "",
    skills: [],
    experience: [],
    education: [],
    connections: [],
    requests: []
  };

  db.users.push(user);
  db.currentUser = user;

  events.emit('profileCreated');

  return user;
}

function viewMyProfile() {
  return db.currentUser;
}

function viewOtherProfiles() {
  return db.users.filter(function(u) {
    return u.id !== db.currentUser.id;
  });
}

module.exports = {
  createProfile,
  viewMyProfile,
  viewOtherProfiles
};