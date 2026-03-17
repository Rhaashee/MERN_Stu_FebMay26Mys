// Writing Custom callback functions

function processStudent(name,score,callback,kid){
    console.log("Student name: ",name);
    console.log("Score: ",score);

    callback(name,score);
    kid(name,score);
}
function showResult(name,score,callback){
    if(score >= 70){
        console.log(name+ " has passed.");
    }else{
        console.log(name+ " has failed.");
    }
}
function showGrade(name,score,callback){
    if(score >= 85){
        console.log("Grade : A+");
    }
    else if(score >= 75){
        console.log("Grade : A");
    }
    else if(score >= 70){
        console.log("Grade : B");
    }
    else{
        console.log("Grade : Fail")
    }
}

// processStudent("Rhaashee Lokesh",95,showResult);
// processStudent("Rhaashee Lokesh",95,showGrade);

processStudent("Rhaashee Lokesh",95,showGrade,showResult);