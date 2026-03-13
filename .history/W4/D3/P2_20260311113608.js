const themeInput = document.getElementById("themeInput");
const output = document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("User Name",themeInput.value);
    console.log("Save theme: ",themeInput.value);
    output.textContent = "Successfully saved to localStorage";
    output.style.color = "green";
});
document.getElementById("readBtn").addEventListener("click",function(){
    const theme = localStorage.getItem("theme");
    output.textContent = "Theme is "+theme;
    output.style.color = "green";
});