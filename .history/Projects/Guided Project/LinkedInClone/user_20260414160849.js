// Add createProfile function to register and initialize user profile
const store = require("./data");
const eventEmitter = require("./events");

function createProfile(name, headline) {
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
            skills: [],
            education: [],
            experience: [],
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
            return reject();
        }

        store.currentUser = user;
        resolve(user);
    });
}

module.exports = { createProfile, login };