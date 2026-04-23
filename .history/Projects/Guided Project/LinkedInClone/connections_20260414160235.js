// Add sendConnectionRequest feature with validation checks
const EventEmitter = require("events");
const chalk = require("chalk");

const eventEmitter = new EventEmitter();

// EVENTS

eventEmitter.on("profileCreated", () => {
    console.log(chalk.green("✔ Profile created successfully"));
});

eventEmitter.on("connectionRequested", () => {
    console.log(chalk.blue("Connection request sent"));
});

eventEmitter.on("connectionAccepted", () => {
    console.log(chalk.green("Connection accepted"));
});

eventEmitter.on("connectionRejected", () => {
    console.log(chalk.yellow("Connection rejected"));
});

eventEmitter.on("postCreated", () => {
    console.log(chalk.green("Post created"));
});

eventEmitter.on("postLiked", () => {
    console.log(chalk.blue("Post liked"));
});

eventEmitter.on("commentAdded", () => {
    console.log(chalk.cyan("💬 Comment added"));
});

eventEmitter.on("operationFailed", (msg) => {
    console.log(chalk.red("❌ " + msg));
});

module.exports = eventEmitter;