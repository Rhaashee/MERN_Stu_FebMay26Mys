const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    console.log("Saved theme : ",themeInput);
    output.textContent = " Successfully Stroed to Local Stroage";
    output.style.color  = "green";
});