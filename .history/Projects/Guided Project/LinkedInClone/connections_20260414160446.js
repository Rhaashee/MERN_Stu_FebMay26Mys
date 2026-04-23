// Add sendConnectionRequest feature with validation checks
const store = require("./data");
const eventEmitter = require("./events");

// SEND REQUEST
function sendRequest(targetName) {
    return new Promise((resolve, reject) => {

        const sender = store.currentUser;
        const receiver = store.users.find(u => u.name === targetName);

        if (!sender) {
            eventEmitter.emit("operationFailed", "Login required");
            return reject();
        }

        if (!receiver) {
            eventEmitter.emit("operationFailed", "User not found");
            return reject();
        }

        if (sender.name === receiver.name) {
            eventEmitter.emit("operationFailed", "Cannot connect with yourself");
            return reject();
        }

        const alreadySent = store.connectionRequests.find(
            r => r.senderId === sender.id && r.receiverId === receiver.id
        );

        if (alreadySent) {
            eventEmitter.emit("operationFailed", "Request already sent");
            return reject();
        }

        const request = {
            senderId: sender.id,
            receiverId: receiver.id,
            status: "pending",
            timestamp: new Date()
        };

        store.connectionRequests.push(request);

        eventEmitter.emit("connectionRequested");
        resolve(request);
    });
}

// VIEW REQUESTS
function viewRequests() {
    const user = store.currentUser;

    const requests = store.connectionRequests.filter(
        r => r.receiverId === user.id && r.status === "pending"
    );

    console.log("\n=== REQUESTS ===");

    requests.forEach((r, i) => {
        const sender = store.users.find(u => u.id === r.senderId);
        console.log(`${i + 1}. ${sender.name}`);
    });

    return requests;
}

// ACCEPT REQUEST
async function acceptRequest(index) {
    try {
        const requests = viewRequests();
        const request = requests[index];

        if (!request) throw "Invalid selection";

        request.status = "accepted";

        const sender = store.users.find(u => u.id === request.senderId);
        const receiver = store.currentUser;

        sender.connections.push(receiver.id);
        receiver.connections.push(sender.id);

        eventEmitter.emit("connectionAccepted");

    } catch (err) {
        eventEmitter.emit("operationFailed", err);
    }
}

// REJECT REQUEST
async function rejectRequest(index) {
    try {
        const requests = viewRequests();
        const request = requests[index];

        if (!request) throw "Invalid selection";

        request.status = "rejected";

        eventEmitter.emit("connectionRejected");

    } catch (err) {
        eventEmitter.emit("operationFailed", err);
    }
}

// VIEW CONNECTIONS
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