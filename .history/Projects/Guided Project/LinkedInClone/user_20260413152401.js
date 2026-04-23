const store = require("./data");
const eventEmitter = require("./events");

function registerUser(name) {
    return new Promise((resolve, reject) => {
        const user = {
            id: Date.now(),
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