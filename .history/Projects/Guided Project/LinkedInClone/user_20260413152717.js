const store = require("./data");
const eventEmitter = require("./events");

function registerUser(id, name) {
    return new Promise((resolve, reject) => {

        // check duplicate ID
        const exists = store.users.find(u => u.id === id);
        if (exists) return reject("User ID already exists");

        const user = {
            id,
            name,
            connections: []
        };

        store.users.push(user);
        store.currentUser = user;

        eventEmitter.emit("userRegistered");
        resolve(user);
    });
}

module.exports = { registerUser };