// Callback function
// is a function that is passed as an arguement to the another function

function greetUser(name, callback){
    console.log("Hello,",name);
    callback();
}
greetUser("Rhaashee",function(){
    console.log("Callback function executed");
})