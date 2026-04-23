// Add createProfile function to register and initialize user profile
const store = require("./data");
const eventEmitter = require("./events");

// CREATE PROFILE (Manual ID)
function createProfile(id, name, headline, skills, education, experience) {
    return new Promise((resolve, reject) => {

        if (store.users.find(u => u.id == id)) {
            eventEmitter.emit("operationFailed", "ID already exists");
            return reject();
        }

        if (store.users.find(u => u.name === name)) {
            eventEmitter.emit("operationFailed", "User already exists");
            return reject();
        }

        const user = {
            id: Number(id),
            name,
            headline,
            skills: skills ? skills.split(",") : [],
            education: education ? education.split(",") : [],
            experience: experience ? experience.split(",") : [],
            connections: []
        };

        store.users.push(user);
        store.currentUser = user;

        console.log("✔ Your ID:", user.id);
        eventEmitter.emit("profileCreated");

        resolve(user);
    });
}

// LOGIN
function login(name, id) {
    return new Promise((resolve, reject) => {

        const user = store.users.find(
            u => u.name === name && u.id == id
        );

        if (!user) {
            eventEmitter.emit("operationFailed", "Invalid name or ID");
            return reject();
        }

        store.currentUser = user;
        resolve(user);
    });
}

module.exports = { createProfile, login };\