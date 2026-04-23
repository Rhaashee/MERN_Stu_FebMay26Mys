// Add profile features like skill, experience, education, and view profile
const store = require("./data");
const eventEmitter = require("./events");

function viewProfile(input) {
    let user;

    if (!input) {
        user = store.currentUser;
    } else {
        user = store.users.find(
            u => u.name === input || u.id == input
        );
    }

    if (!user) return eventEmitter.emit("operationFailed", "User not found");

    console.log("\n=== PROFILE ===");
    console.log("ID:", user.id);
    console.log("Name:", user.name);
    console.log("Headline:", user.headline);
    console.log("Skills:", user.skills.join(", ") || "None");
    console.log("Education:", user.education.join(", ") || "None");
    console.log("Experience:", user.experience.join(", ") || "None");
}

function addSkill(skill) {
    const u = store.currentUser;
    if (!u) return eventEmitter.emit("operationFailed", "Login required");

    u.skills.push(skill);
    eventEmitter.emit("profileUpdated");
}

module.exports = { viewProfile, addSkill };