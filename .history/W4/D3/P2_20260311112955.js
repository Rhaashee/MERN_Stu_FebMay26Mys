const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    console.log("Save theme: ",themeInput.value);
    output.textContent = "save localStorage successfully";
    output.style.color = "red";
});
document.getElementById("readBtn").addEventListener("click",function(){
    console.log(localStorage.getItem("theme"));
    output.textContent = "successfully";
    output.style.color = "red";
});