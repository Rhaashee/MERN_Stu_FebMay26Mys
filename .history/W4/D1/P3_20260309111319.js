// throw errors 
// function divide(a,b){
//     if (b===0){
//         throw new Error("Cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//     // console.log(divide(10,2));
//     console.log(divide(10,0));

// }
// catch(err){
//     console.log("Caught: ",err.message);
// }

function checkAge(age){
    if (age<18){
        throw new Error("Age must be 18 and above");
    }
    return age;
}
try{
    // console.log(checkAge(10,2));
    console.log(checkAge(10,0));

}
catch(err){
    console.log("Caught: ",err.message);
}