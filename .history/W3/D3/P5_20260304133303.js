// Basics of Objects
const person = {
    name:"Rhaashee",
    age:21,
    isStudent:true
};
// console.log("person",person)
console.log("Name : ",person.name);
console.log("Age : ",person["age"]);

// Add new Property
person.city = "Mysore";
console.log("person",person);

// Modify
person.age = 22;

// delete
delete person.isStudent;
console.log()