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
        let ch = password[i];
        if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
            hasLetter = true;
     }
     if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
}
}