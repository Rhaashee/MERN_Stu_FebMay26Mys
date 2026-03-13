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

    // Check for letters (A-Z or a-z) using comparison operators
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      hasLetters = true;
    }

    // Check for numbers (0-9)
    if (char >= '0' && char <= '9') {
      hasNumbers = true;
    }
  }

  // 4. Rule: Use comparison + logical operators for final tagging
  // We check for "STRONG" first because it is the stricter condition
  if (password.length >= 12 && hasLetters && hasNumbers) {
    return "STRONG";
  } 
  else if (password.length >= 8 && hasLetters && hasNumbers) {
    return "MEDIUM";
  } 
  else {
    // If it has length >= 8 but fails the letters/numbers check, it remains WEAK
    return "WEAK";
  }
}