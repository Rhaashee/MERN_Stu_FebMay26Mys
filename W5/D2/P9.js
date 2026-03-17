// Promise States : Pending, fulfilled, rejected
const fulfilledPromise = new Promise(function(resolved){
    console.log("fulfilledPromise is Pending");

    setTimeout(function(){
        resolved("fulfilledPromise is fulfilled");
    },1000);
});

const rejectedPromise = new Promise(function(resolved,reject){
    console.log("rejectedPromise is pending.");
    setTimeout(function(){
        reject("rejectedPromise is rejected.");
    },1500);
});
fulfilledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
});
    