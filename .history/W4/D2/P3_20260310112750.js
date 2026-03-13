// InsertAdjacenHTML
const container = document.getElementById("container");
// position:
// beforebegin
// afterbegin
// beforeend
// after
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("","<p>Dynamically inserted</p>");
});