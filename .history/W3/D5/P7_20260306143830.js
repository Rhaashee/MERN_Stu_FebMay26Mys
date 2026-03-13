//Event bubbling and stopPropagation

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerButton = document.getElementById("innerButton");

outer.addEventListener("click",function(){
    console.log("Outer div clicked")

});