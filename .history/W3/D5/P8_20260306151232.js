//Event delegation

const taskList= document.getElementById("taskList");
const addTask = document.getElementById("addTak")

taskList.addEventListener("click",function(event){
    if(event.target.classList.contains("deleteBtn")){
        console.log("Delete button clicked for:",event.target.parentElement.textContent.trim());
    event.target.parentElement.remove();
    }
});

addTask.addEventListener("click",function(){
    taskCount++;
    const li = document.createElement("li");
    li
})