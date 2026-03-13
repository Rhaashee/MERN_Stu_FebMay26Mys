function tagPassword(password) {
  // 1. Rule: Use typeof for type check
  if (typeof password !== 'string') {
    return "INVALID";
  }

  // 2. Rule: "WEAK" if length < 8
  if (password.length < 8) {
    return "WEAK";
  }

  let hasLetters = false;
  let hasNumbers = false;

  // 3. Rule: Use a for loop to scan characters (don't use regex)
  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      hasLetters = true;
    }
    
    if (char >= '0' && char <= '9') {
      hasNumbers = true;
    }
  }
  
  if (password.length >= 12 && hasLetters && hasNumbers) {
    return "STRONG";
  } 
  else if (password.length >= 8 && hasLetters && hasNumbers) {
    return "MEDIUM";
  } 
  else {
   
    return "WEAK";
  }
}
console.log(tagPassword("Rlokesh@73493"));
console.log(tagPassword("Rhaa"));
console.log(tagPassword("Rlokesh"));
console.log(tagPassword("Rhaa"));