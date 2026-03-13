const existingPostBtn = document.getElementById("existingPostBtn");
const missingPostBtn = document.getElementById("missingPostBtn");
const statusOutput = document.getElementById("statusOutput");

function fetchPost(url){
    statusOutput.textContent = "Fetching from "+url;
    fetch(url)
    .then(function(response){
        if()
    })
}
