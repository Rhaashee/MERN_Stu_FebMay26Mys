const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");


password.addEventListener("input",function(){
    if(!password){
        message.textContent = "Password is Required!";
        message.style.color  = "red";
        livePassword.focus();
        return;
    }
})