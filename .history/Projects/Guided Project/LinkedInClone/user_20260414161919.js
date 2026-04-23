// Add createProfile function to register and initialize user profile
const store = require("./data");
const eventEmitter = require("./events");

// CREATE PROFILE (UPDATED)
function createProfile(name, headline, skills, education, experience) {
    return new Promise((resolve, reject) => {

        const exists = store.users.find(u => u.name === name);
        if (exists) {
            eventEmitter.emit("operationFailed", "User exists");
            return reject();
        }

        const user = {
            id: Date.now(),
            name,
            headline,
            skills: skills ? skills.split(",") : [],
            education: education ? education.split(",") : [],
            experience: experience ? experience.split(",") : [],
            connections: []
        };

        store.users.push(user);
        store.currentUser = user;

        console.log("Your ID:", user.id); // IMPORTANT
        eventEmitter.emit("profileCreated");

        resolve(user);
    });
}

// LOGIN WITH NAME + ID
function login(name, id) {
    return new Promise((resolve, reject) => {

        const user = store.users.find(u => u.name === name && u.id == id);

        if (!user) {
            eventEmitter.emit("operationFailed", "Invalid name or ID");
            return reject();
        }

        store.currentUser = user;
        resolve(user);
    });
}

module.exports = { createProfile, login };