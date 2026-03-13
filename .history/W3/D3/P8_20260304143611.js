// JSON stringif parse
const employee = {
    id : 90,
    name : "Rhaashee",
    dept : "DS",
    isActive : true
};
const jsonString = JSON.stringify(employee);
// console.log(jsonString);
// console.log(employee);

// JSON parsing 
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);