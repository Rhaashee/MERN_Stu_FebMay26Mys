const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");

asyncFetchBtn.addEventListener("click",async function(){
    try{
        const response = await
        fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error
    }
});