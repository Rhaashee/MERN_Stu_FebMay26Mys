const store = require("./data");
const eventEmitter = require("./events");

function addConnection(targetId) {
    return new Promise((resolve, reject) => {

        const targetUser = store.users.find(u => u.id === targetId);

        if (!targetUser) return reject("User not found");

        if (targetId === store.currentUser.id)
            return reject("Cannot connect yourself");

        store.currentUser.connections.push(targetId);

        eventEmitter.emit("connectionAdded");
        resolve("Connection successful");
    });
}

module.exports = { addConnection };