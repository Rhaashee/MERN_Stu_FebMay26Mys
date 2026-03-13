const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click",function(){
    console.log("Local Stroage Chcek", typeof localStorage != "undefined"); 
    checks if domain already has a local stroage
    console.log("Session Stroage Chcek", typeof sessionStorage != "undefined");
})