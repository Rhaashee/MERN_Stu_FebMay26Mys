const db = require('./data');
const events = require('./events');

function addSkill(skill) {
  db.currentUser.skills.push(skill);
  events.emit('profileUpdated');
}

function addEducation(edu) {
  db.currentUser.education.push(edu);
  events.emit('profileUpdated');
}

function addExperience(exp) {
  db.currentUser.experience.push(exp);
  events.emit('profileUpdated');
}

module.exports = {
  addSkill,
  addEducation,
  addExperience
};