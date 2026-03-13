const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");


password.addEventListener("submit",function(event){
    const password = password.value;
    const confirmPassword = confirmPassword.value;

    if(!confirmPassword){
        message.textContent = "Password is Required!";
        message.style.color  = "red";
        confirmPassword.focus();
        return;
    }
    // Check length of the PASSWORD
    if(password.length < 8){
        message.textContent = "Password must be atleast 8 characters long.";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
    
    if (password !== confirmPassword){
        message.textContent = "Password doesn't match ";
        message.style.color  = "red";
        confirmPassword.focus();
        return;
    }
    message.textContent = "Valid Password Set";
    message.style.color = "green";

    console.log("Success,Password is set!!:", password);
})