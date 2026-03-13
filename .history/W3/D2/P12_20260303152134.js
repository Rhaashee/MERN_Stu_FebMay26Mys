// Higher order function
// 1. a Function which takes another function as parameter(call back functn)
// or 
// 2. A function returns another function

function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double = createMultiplier(2);
console.log("double(10) : ", double(10));
let triple = createMultiplier(3);
console.log("Triple(10) : ", triple(10));