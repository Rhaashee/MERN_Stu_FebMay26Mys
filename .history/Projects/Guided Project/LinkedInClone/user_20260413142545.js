const db = require('./data');
const events = require('./events');

function createProfile(name) {
  const user = {
    id: Date.now().toString(),
    name,
    headline: '',
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

// To view my profile 
function viewMyProfile() {
  return db.currentUser;
}

// To view others Profile 
function viewOtherProfiles() {
  return db.users.filter(u => u.id !== db.currentUser.id);
}