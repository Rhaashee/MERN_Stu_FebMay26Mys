// Event delegation

const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTask");

taskList.addEventListener("click",function(event){
    if(event.target.classlist.contains("deleteBtn")){
        console.log("Delete button clicked for:",event.target.parentElement.textContent.trim());
    }
)
});