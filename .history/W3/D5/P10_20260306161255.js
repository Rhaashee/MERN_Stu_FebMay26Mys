const ClickBtn = document.getElementById("ClickBtn");
const
ClickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoInput