let attempts = 0;

function validateInput(input, callback) {

  // Step 1: Check empty input
  if (!input || input.trim() === "") {

    attempts++;
    console.log("Invalid input");

    // Step 2: Retry logic (max 3 attempts)
    if (attempts >= 3) {
      console.log("Maximum attempts reached.Existing Page ");
      process.exit();
    }

    return;
  }

  // Step 3: Reset attempts if valid
  attempts = 0;

  // Step 4: Call next function (callback)
  callback();
}

module.exports = {
  validateInput
};