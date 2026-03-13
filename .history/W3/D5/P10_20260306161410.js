const ClickBtn = document.getElementById("ClickBtn");
const demoInput = document.getElementById("demoInput")
ClickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if
})