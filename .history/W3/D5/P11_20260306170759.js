const btn = document.getElementById("compareBtn");
btn.addEventListener("click",function(e){
    console.log("this === btn",this===btn);
});

b