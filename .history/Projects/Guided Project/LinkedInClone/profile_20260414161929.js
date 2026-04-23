// Add profile features like skill, experience, education, and view profile
const store = require("./data");
const eventEmitter = require("./events");

// VIEW ANY PROFILE (NEW)
function viewProfile(identifier) {

    let user;

    if (!identifier) {
        user = store.currentUser;
    } else {
        user = store.users.find(
            u => u.name === identifier || u.id == identifier
        );
    }

    if (!user) {
        return eventEmitter.emit("operationFailed", "User not found");
    }

    console.log("\n=== PROFILE ===");
    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Headline:", user.headline);
    console.log("Skills:", user.skills.join(", ") || "None");
    console.log("Education:", user.education.join(", ") || "None");
    console.log("Experience:", user.experience.join(", ") || "None");
}

module.exports = { viewProfile };