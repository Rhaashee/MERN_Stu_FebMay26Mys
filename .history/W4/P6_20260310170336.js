const livePassword = document.getElementById("livePassword");
const message = document.getElementById("message");

livePassword.addEventListener("input",function(){
    // Password Validation
    const password = livePassword.value;
    if(!password){
        message.textContent = "Password is Required!";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // Check length of the PASSWORD
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // Check for UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must have atleast 1 UPPERCASE character.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // Check for LOWERCSE characters
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must have atleast 1 LOWERCASE character.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // check number 
    if(!/\d/.test(password)){
        message.textContent = "Password must have atleast 1 digit in it.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    // check for special characters 
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must have atleast 1 special character [!@#$%&*].";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    message.textContent = "Valid Email and password entered!"
    message.style.color  = "blue";
    console.log("Success!",{email,password});
});








const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

confirmPassword.addEventListener("input", function () {

    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if(!confirmPass){
        message.textContent = "Please re-enter the password.";
        message.style.color = "red";
        return;
    }

    if(pass !== confirmPass){
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    message.textContent = "Password matched successfully!";
    message.style.color = "blue";

    console.log("Password confirmed:", pass);
});