function tagPassword(password){
    if(typeof password !== "string"){
    return "INVALID";
}
}
if(password.length < 8){
        return "WEAK";
    }

    if(password.length >= 12 && hasLetter && hasNumber){
        return "STRONG";
    }

    if(password.length >= 8 && hasLetter && hasNumber){
        return "MEDIUM";
    }

    return "WEAK";

console.log(tagPassword("abc"));