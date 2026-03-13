const onceBtn = document.getElementById("onceBtn");

// Limiting Listener to one event
onceBtn.addEventListener("click",function(){
    console.log("This click listener works only once.");
},{once:true});

document.addEventListener("keydown",function(event){
    if(event.ctrlKey)
})
