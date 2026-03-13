const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");


password.addEventListener("input",function(){
    const pass = password.value;
    const confirmPass = confirmPassword.value;

    if(!confirmPassword){
        message.textContent = "Password is Required!";
        message.style.color  = "red";
        confir.focus();
        return;
    }
})