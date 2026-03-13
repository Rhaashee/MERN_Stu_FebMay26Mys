const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");


password.addEventListener("input",function(){
    const password = password.value;
    const confirmPassword = confirmPassword.value;

    if(!confirmPassword){
        message.textContent = "Password is Required!";
        message.style.color  = "red";
        confirmPassword.focus();
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

    console.log("Password confirmed:", password);
})