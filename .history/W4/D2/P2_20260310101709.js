// Create Element() & appendChild()

const list = document.getElementById("list");
let counter = 1;

document.getElementById("addBtn").addEventListener("click",function(){
    const li = document.createElement("li");
    li.textContent = "Item " + counter++;
    list.appendChild(li);
});

document.getElementById("rmBtn").addEventListener("click",function(){
    list.removeChild(list.lastElementChild)
});