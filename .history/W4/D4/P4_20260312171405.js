const out = document.getElementById("out");

function explain(code){
    if(code === 1)return "Permission denied";
    if(code === 2)return "Position Unavailable";
    if(code === 3)return "Request Timed out";
    return "Unknown Error";
}
document.getElementById("localBtn").addEventListener("click",function(){
    if(!navigator.geolocation){
        out.textContent = "{"
    }
})