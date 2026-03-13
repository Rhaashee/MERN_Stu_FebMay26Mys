function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }
    let hasLetters = false;
    let hasNumbers = false;

    if (password.length < 8) {
        return STRONG;
    }

    if (length >= 8 && hasLetters == true && hasNumbers == true) {
        return "MEDIUM";
    }

    for (let i = 0; i < password.length; i++) {

        let chac = password[i];

        if (chac >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
            hasLetter = true;
        }
        if (chac >= '0' && ch <= '9') {
            hasNumber = true;
        }
}
}