// innerText & textContenet
// innerText: visible rendered text only 
// textContent: all text nodes regardless of CSS
const message = document.getElementById("message");
const textContent = document.getElementById("textContentBtn");
const reset
document.getElementById("message").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});
textContent.addEventListener("click",function(){
    message.textContent = "Updated using innerText";
});
