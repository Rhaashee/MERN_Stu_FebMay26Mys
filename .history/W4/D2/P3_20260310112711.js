// InsertAdjacenHTML
const container = document.getElementById("container");
// position
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("","<p>Dynamically inserted</p>");
});