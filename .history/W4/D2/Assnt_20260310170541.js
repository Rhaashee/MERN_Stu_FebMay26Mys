const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");


password.addEventListener("input",function(){
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if(!confirmPassword){
        message.textContent = "Password is Required!";
        message.style.color  = "red";
        confirmPassword.focus();
        return;
    }
    if (password !== confirmPassword){
        message.textContent = "Password doent ";
        message.style.color  = "red";
        confirmPassword.focus();
        return;
    }
})