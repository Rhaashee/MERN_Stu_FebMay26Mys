// Add event emitter with listeners for profile, connection, and post events
emitter.on("connectionRejected", () => {
    console.log(chalk.yellow("❌ Request rejected"));
});

emitter.on("postLiked", () => {
    console.log(chalk.green("❤️ Post liked"));
});

emitter.on("commentAdded", () => {
    console.log(chalk.cyan("💬 Comment added"));
});