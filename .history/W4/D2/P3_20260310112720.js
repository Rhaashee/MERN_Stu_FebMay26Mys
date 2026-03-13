// InsertAdjacenHTML
const container = document.getElementById("container");
// position:
// before
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("","<p>Dynamically inserted</p>");
});