// innerText & textContenet
// innerText: visible rendered text only 
// textContent: all text nodes regardless of CSS
const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");

document.getElementById("message").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});
t.addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});
