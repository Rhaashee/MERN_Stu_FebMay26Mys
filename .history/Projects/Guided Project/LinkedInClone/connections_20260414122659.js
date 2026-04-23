// Add sendConnectionRequest feature with validation checks
const store = require("./data");
const eventEmitter = require("./events");

function sendConnectionRequest(targetId) {
    return new Promise((resolve, reject) => {

        const targetUser = store.users.find(u => u.id === targetId);

        if (!targetUser) {
            return reject("User not found");
        }

        if (targetId === store.currentUser.id) {
            return reject("Cannot connect with yourself");
        }

        const alreadyConnected = store.currentUser.connections.includes(targetId);

        if (alreadyConnected) {
            return reject("Already connected");
        }

        const alreadyRequested = store.connectionRequests.find(
            r => r.senderId === store.currentUser.id && r.receiverId === targetId
        );

        if (alreadyRequested) {
            return reject("Request already sent");
        }

        const request = {
            senderId: store.currentUser.id,
            receiverId: targetId,
            status: "pending",
            timestamp: new Date()
        };

        store.connectionRequests.push(request);

        eventEmitter.emit("connectionRequested");
        resolve(request);
    });
}

module.exports = { sendConnectionRequest };