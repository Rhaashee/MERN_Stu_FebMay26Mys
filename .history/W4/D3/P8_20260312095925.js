const asyncFetchBtn = document.getElementById("asyncFetchBtn");
const output = document.getElementById("output");

asyncFetchBtn.addEventListener("click",async function(){
    output.textContent = "Loading user...";
    try{
        const response = await
        fetch("https://jsonplaceholder.typicode.com/posts/12");
        if(!response.ok) throw new Error("")
    }
    catch{

    }
});