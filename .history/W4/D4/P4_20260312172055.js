const out = document.getElementById("out");

function explain(code){
    if(code === 1)return "Permission denied";
    if(code === 2)return "Position Unavailable";
    if(code === 3)return "Request Timed out";
    return "Unknown Error";
}
document.getElementById("localBtn").addEventListener("click",function(){
    if(!navigator.geolocation){
        out.textContent = "GeoLocation is not Supported in this Browser";
    }
    out.textContent = "Requestiong Current Location....",function(position){
        const data = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
        };
        console.log(data);
        out.textContent = JSON.stringify(data,null,2);
    },
    function
})