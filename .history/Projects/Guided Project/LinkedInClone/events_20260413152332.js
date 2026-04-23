const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("userRegistered", () => {
    console.log("User Registered Successfully");
});

eventEmitter.on("profileCreated", () => {
    console.log("Profile Created");
});

eventEmitter.on("connectionAdded", () => {
    console.log("Connection Added");
});

eventEmitter.on("postCreated", () => {
    console.log("Post Created");
});

eventEmitter.on("error", (msg) => {
    console.log("Error:", msg);
});

module.exports = eventEmitter;