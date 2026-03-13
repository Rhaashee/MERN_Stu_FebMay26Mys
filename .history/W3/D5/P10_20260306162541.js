const ClickBtn = document.getElementById("ClickBtn");
const demoInput = document.getElementById("demoInput");
const runClick = document.getElementById("runClick");
const runMouseover = document.getElementById("runMouseover");
const runkeydown = document.getElementById("runkeydown");
const runDuplicate= document.getElementById("runDuplicate");
const hoverBox = document.getElementById("hoverBox");

ClickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        console.log("Enter key down");
    }
})

runClick.addEventListener("click",function(){
    ClickBtn
})