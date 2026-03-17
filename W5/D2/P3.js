// Asynchronous approach of Node.js

console.log("Step 1: Script Started ");

setTimeout(() => {
    console.log("Step 3: delayed callback finished. F1");
},10000);
setTimeout(function(){
    console.log("Step 3: delayed callback finished. F2");
},3000);

console.log("Step 2: Script did not stop while waiting.");