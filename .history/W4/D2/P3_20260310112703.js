// InsertAdjacenHTML
const container = document.getElementById("container");
// pos
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("","<p>Dynamically inserted</p>");
});