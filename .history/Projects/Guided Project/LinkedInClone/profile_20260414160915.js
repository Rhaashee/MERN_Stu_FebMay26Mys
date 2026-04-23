// Add profile features like skill, experience, education, and view profile
const store = require("./data");
const eventEmitter = require("./events");

function viewProfile() {
    const u = store.currentUser;

    if (!u) return eventEmitter.emit("operationFailed", "Login required");

    console.log("\nName:", u.name);
    console.log("Headline:", u.headline);
    console.log("Skills:", u.skills.join(", ") || "None");
    console.log("Education:", u.education.join(", ") || "None");
    console.log("Experience:", u.experience.join(", ") || "None");
}

function addSkill(skill) {
    const u = store.currentUser;
    if (!u) return eventEmitter.emit("operationFailed", "Login required");

    u.skills.push(skill);
    eventEmitter.emit("profileUpdated");
}

module.exports = { viewProfile, addSkill };