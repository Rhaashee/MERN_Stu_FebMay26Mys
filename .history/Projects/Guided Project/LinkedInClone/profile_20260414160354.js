// Add profile features like skill, experience, education, and view profile
const store = require("./data");
const eventEmitter = require("./events");

// VIEW PROFILE
function viewMyProfile() {
    return new Promise((resolve, reject) => {
        const user = store.currentUser;

        if (!user) {
            eventEmitter.emit("operationFailed", "Login required");
            return reject("No user");
        }

        console.log("\n=== MY PROFILE ===");
        console.log("Name:", user.name);
        console.log("Headline:", user.headline);
        console.log("Skills:", user.skills.join(", ") || "None");
        console.log("Education:", user.education.join(", ") || "None");
        console.log("Experience:", user.experience.join(", ") || "None");

        resolve(user);
    });
}

// ADD SKILL
function addSkill(skill) {
    return new Promise((resolve, reject) => {
        const user = store.currentUser;

        if (!user) {
            eventEmitter.emit("operationFailed", "Login required");
            return reject();
        }

        user.skills.push(skill);

        eventEmitter.emit("profileUpdated");
        resolve(user);
    });
}

// ADD EDUCATION
function addEducation(edu) {
    return new Promise((resolve, reject) => {
        const user = store.currentUser;

        if (!user) {
            eventEmitter.emit("operationFailed", "Login required");
            return reject();
        }

        user.education.push(edu);

        eventEmitter.emit("profileUpdated");
        resolve(user);
    });
}

// ADD EXPERIENCE
function addExperience(exp) {
    return new Promise((resolve, reject) => {
        const user = store.currentUser;

        if (!user) {
            eventEmitter.emit("operationFailed", "Login required");
            return reject();
        }

        user.experience.push(exp);

        eventEmitter.emit("profileUpdated");
        resolve(user);
    });
}

module.exports = {
    viewMyProfile,
    addSkill,
    addEducation,
    addExperience
};