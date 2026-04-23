const EventEmitter = require("events");
const chalk = require("chalk");

const eventEmitter = new EventEmitter();

eventEmitter.on("profileCreated", () =>
    console.log(chalk.green("Profile created"))
);

eventEmitter.on("profileUpdated", () =>
    console.log(chalk.green("Profile updated"))
);

eventEmitter.on("connectionRequested", () =>
    console.log(chalk.blue("Request sent"))
);

eventEmitter.on("connectionAccepted", () =>
    console.log(chalk.green("Connected"))
);

eventEmitter.on("connectionRejected", () =>
    console.log(chalk.yellow("Request rejected"))
);

eventEmitter.on("postCreated", () =>
    console.log(chalk.green("Post created"))
);

eventEmitter.on("postLiked", () =>
    console.log(chalk.blue("Post liked"))
);

eventEmitter.on("commentAdded", () =>
    console.log(chalk.cyan("Comment added"))
);

eventEmitter.on("feedViewed", () =>
    console.log(chalk.magenta("Feed loaded"))
);

eventEmitter.on("operationFailed", (msg) =>
    console.log(chalk.red("Error " + msg))
);

module.exports = eventEmitter;