const question = document.getElementById("Question");
const Answer = document.getElementById("Answer");
const addFAQBtn = document.getElementById("addBtn");

addFAQBtn.addEventListener("click",function(){
    let question = questionInput.value;
    let Answer = answerInput.value;

    if(questsion.length<5){
        error.textContent = "Question must be minimum 5 characters";
        return;
    }
    if(answer.length<5){
        error.textContent = "Question must be minimum 5 characters";
        return;
});