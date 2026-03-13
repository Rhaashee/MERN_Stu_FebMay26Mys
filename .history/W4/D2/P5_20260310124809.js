const signupForm = document.getElementById("signupForm");
const signupEmail  = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit",function(event){
    event.preventDefault();

    if(!email){
        message.textContent = "Email is Required!";
        message.style.color  = "red";
        signupEmail.focus()
    }
})