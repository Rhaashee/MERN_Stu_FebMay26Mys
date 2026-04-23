// Add sendConnectionRequest feature with validation checks
const store = require("./data");
const eventEmitter = require("./events");

function sendRequest(name) {
    return new Promise((resolve, reject) => {

        const sender = store.currentUser;
        const receiver = store.users.find(u => u.name === name);

        if (!sender) return reject(eventEmitter.emit("operationFailed","Login required"));
        if (!receiver) return reject(eventEmitter.emit("operationFailed","User not found"));
        if (sender.id === receiver.id) return reject(eventEmitter.emit("operationFailed","Cannot connect yourself"));

        const exists = store.connectionRequests.find(r =>
            r.senderId === sender.id && r.receiverId === receiver.id
        );

        if (exists) return reject(eventEmitter.emit("operationFailed","Already sent"));

        store.connectionRequests.push({
            senderId: sender.id,
            receiverId: receiver.id,
            status: "pending"
        });

        eventEmitter.emit("connectionRequested");
        resolve();
    });
}

function viewRequests() {
    const user = store.currentUser;

    const reqs = store.connectionRequests.filter(
        r => r.receiverId === user.id && r.status === "pending"
    );

    console.log("\n=== REQUESTS ===");

    reqs.forEach((r, i) => {
        const sender = store.users.find(u => u.id === r.senderId);
        console.log(`${i+1}. ${sender.name}`);
    });

    return reqs;
}

async function acceptRequest(i) {
    try {
        const reqs = viewRequests();
        const r = reqs[i];
        if (!r) throw "Invalid";

        r.status = "accepted";

        const sender = store.users.find(u => u.id === r.senderId);
        const receiver = store.currentUser;

        sender.connections.push(receiver.id);
        receiver.connections.push(sender.id);

        eventEmitter.emit("connectionAccepted");

    } catch (err) {
        eventEmitter.emit("operationFailed", err);
    }
}

async function rejectRequest(i) {
    try {
        const reqs = viewRequests();
        const r = reqs[i];
        if (!r) throw "Invalid";

        r.status = "rejected";
        eventEmitter.emit("connectionRejected");

    } catch (err) {
        eventEmitter.emit("operationFailed", err);
    }
}

function viewConnections() {
    const user = store.currentUser;

    console.log("\n=== CONNECTIONS ===");

    user.connections.forEach(id => {
        const u = store.users.find(x => x.id === id);
        console.log(u.name);
    });
}

module.exports = {
    sendRequest,
    viewRequests,
    acceptRequest,
    rejectRequest,
    viewConnections
};