// Basics of Click Event

const button = document.getElementById("clickBtn");

button.addEventListener("click",function() {
    console.log("Button is Clicked");
});
button.addEventListener("click",function() {
    console.log("Second Event Button is Clicked");
});