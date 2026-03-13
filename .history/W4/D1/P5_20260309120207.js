// BreakPoint
//Inspects variable values
// View the call stack
// Step through code line by line
// Evaluate expressions in the console
// watch how variables change during the execution
// To find logical errors
function calculateTotal(prices){
    let total = 0;
    for(let i = 0 ; i<prices.length; i++){
        let prices = prices[i];
        debugger;
        total += prices;
    }
}
let cart = [100,250,150,1000,220];
console.log("Total: ",calculateTotal(cart));