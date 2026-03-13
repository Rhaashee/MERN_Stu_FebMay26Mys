// student form 
const studentForm = document.getElementById("studentForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const inspectBtn = document.getElementById("inspectBtn");
const terms = document.getElementById("terms");
const country = document.getElementById

inspectBtn.addEventListener("click",function(){
    console.log("Form: ",studentForm);
    console.log("Name: ",nameInput.value);
    console.log("Email: ",emailInput.value);
});