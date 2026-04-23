//To Handles sending, receiving, accepting, and rejecting connection requests
const { getCurrentUser, getAllUsers } = require("./user");

let requests = [];

function sendRequest(targetId) {
    return new Promise((resolve, reject) => {
        const sender = getCurrentUser();
        const target = getAllUsers().find(u => u.id === targetId);

        if (!target) return reject("User not found");
        if (target.id === sender.id) return reject("Cannot connect yourself");

        const already = requests.find(r =>
            r.senderId === sender.id && r.receiverId === targetId
        );

        if (already) return reject("Request already sent");

        const request = {
            senderId: sender.id,
            receiverId: targetId,
            status: "pending",
            time: new Date()
        };

        requests.push(request);
        resolve(request);
    });
}

function getRequests() {
    const user = getCurrentUser();
    return requests.filter(r => r.receiverId === user.id);
}

// Accept request 
async function acceptRequest(senderId) {
    const user = getCurrentUser();
    const req = requests.find(r =>
        r.senderId === senderId && r.receiverId === user.id
    );

    if (!req) throw "Request not found";

    req.status = "accepted";
    // To Remove request after accepting
    requests = requests.filter(r =>
        !(r.senderId === senderId && r.receiverId === user.id)
    );

    const users = getAllUsers();
    const sender = users.find(u => u.id === senderId);

    // Prevent crash if undefined
    if (!user.connections) user.connections = [];
    if (!sender.connections) sender.connections = [];

    user.connections.push(senderId);
    sender.connections.push(user.id);

    return req;
}
function rejectRequest(senderId) {
    const user = getCurrentUser();

    const index = requests.findIndex(r =>
        r.senderId === senderId && r.receiverId === user.id
    );

    if (index === -1) throw "Request not found";

    // REMOVE request
    requests.splice(index, 1);

    return "Request rejected";
}

module.exports = {
    sendRequest,
    getRequests,
    acceptRequest,
    rejectRequest
};