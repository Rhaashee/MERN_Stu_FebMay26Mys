const question = document.getElementById("question");
const answer = document.getElementById("answer");
const addFAQBtn = document.getElementById("addBtn");

addFAQBtn.addEventListener("click",function(){
    let question = questionInput.value;
    let Answer = answerInput.value;

    if(questsion.length<5){
        error.textContent = "Question must be 5 characters";
        return;
    }
    if(answer.length<15){
        error.textContent = "Answer must be 15 characters";
        return;
    }
    const faq = document.createElement("div");
    const q = document.createElement("h3");
    q.textContent = question;
});