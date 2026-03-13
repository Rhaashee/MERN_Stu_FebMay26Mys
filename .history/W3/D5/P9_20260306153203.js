const onceBtn = document.getElementById("onceBtn");

// Limiting Listener to 
onceBtn.addEventListener("click",function(){
    console.log("This click listener works only once.");
},{once:true});
