// InsertAdjacenHTML
const container = document.getElementById("container");
// position:
// beforeBegin
// afterbegin
// beforeend
/
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("","<p>Dynamically inserted</p>");
});