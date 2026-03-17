// Introduction to callback
function greetUser(name,callback){
    console.log("Hello,"+name);
    // the callback function is executed only after the execution of current function
    callback();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.");
}
greetUser("Rhaashee",showCompletionMessage);
