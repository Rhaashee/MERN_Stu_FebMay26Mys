const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "Sending Request...";
    fetch("https://jsonplaceholder.typicode.com/posts/12")
    .then(function(response){
        console.log("Raw Response object : ",response);
        output.textContent = "Status: "+response.status+ "\nOk:"+response.ok;
    })
    .catch(function(error){
        output.textContent = "Unexpected fetch error: "+error.message;
    });
})

