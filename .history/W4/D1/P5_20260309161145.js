// BreakPoint
//Inspects variable values
// View the call stack
// Step through code line by line
// Evaluate expressions in the console
// watch how variables change during the execution
// To find logical errors

function calculateTotal(prices){
    let total = 0;
    for(let i = 0;i<prices.length;i++){
        let price = prices[i];
        debugger;
        total+=price;
    }
    return total;
}

let cart = [100,250,150,1000,220];
console.log("total: ",calculateTotal(cart));
Some challenges included identifying the exact source of errors in larger code blocks and understanding the difference between syntax errors and runtime errors. Improper placement of try–catch blocks may prevent errors from being handled correctly. There is also a risk of relying heavily on console logging without systematically analyzing the problem. Effective debugging requires patience, logical reasoning, and structured testing. Continued practice in analyzing error messages and debugging code will help improve accuracy and efficiency in resolving programming issues.