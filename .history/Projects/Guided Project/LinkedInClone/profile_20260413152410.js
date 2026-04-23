const store = require("./data");
const eventEmitter = require("./events");

function createProfile(bio) {
    return new Promise((resolve, reject) => {
        if (!store.currentUser) return reject("Login first");

        const profile = {
            userId: store.currentUser.id,
            bio
        };

        store.profiles.push(profile);
        eventEmitter.emit("profileCreated");

        resolve(profile);
    });
}

module.exports = { createProfile };