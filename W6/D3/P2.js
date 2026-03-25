// Reading and writing files synchronously 

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"sync-note.txt");

fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block execution.");
console.log("File written Synchronously.");

const content = fs.readFileSync(filePath,"utf-8");
console.log("File read Synchronous.");
console.log(content);