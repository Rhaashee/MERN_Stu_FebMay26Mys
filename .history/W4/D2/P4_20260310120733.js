// student form 
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const inspectBtn = document.getElementById("inspectBtn");

inspectBtn.addEventListener("click",function(){
    console.log("Form: ",studentForm);
    console.log("Form: ",nameInput.value);
});