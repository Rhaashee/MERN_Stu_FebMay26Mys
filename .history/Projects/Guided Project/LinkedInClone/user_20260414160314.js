// Add createProfile function to register and initialize user profile
const store = require("./data");
const eventEmitter = require("./events");

function createProfile(name, headline) {
    return new Promise((resolve, reject) => {

        const existing = store.users.find(u => u.name === name);

        if (existing) {
            eventEmitter.emit("operationFailed", "User already exists");
            return reject("Duplicate user");
        }

        const user = {
            id: Date.now(),
            name,
            headline,
            skills: [],
            experience: [],
            education: [],
            connections: []
        };

        store.users.push(user);
        store.currentUser = user;

        eventEmitter.emit("profileCreated");
        resolve(user);
    });
}

function login(name) {
    return new Promise((resolve, reject) => {

        const user = store.users.find(u => u.name === name);

        if (!user) {
            eventEmitter.emit("operationFailed", "User not found");
            return reject("User not found");
        }

        store.currentUser = user;
        resolve(user);
    });
}

module.exports = { createProfile, login };