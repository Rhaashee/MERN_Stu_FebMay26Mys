const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    console.log("Save theme: ",themeInput.value);
    output.textContent = "Successfully saved to localStorage";
    output.style.color = "green";
});
document.getElementById("readBtn").addEventListener("click",function(){
    console.log(localStorage.getItem("theme"));
    output.textContent = "Successfully saved to localStorage"+theme;
    output.style.color = "green";
});