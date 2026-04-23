function validateUser(name, callback) {
    if (!name || name.length < 3) {
        return callback("Invalid name Try again", null);
    }
    callback(null, name);
}

function validatePost(content, callback) {
    if (!content || content.length === 0) {
        return callback("Post cannot be empty", null);
    }
    callback(null, content);
}

module.exports = { validateUser, validatePost };