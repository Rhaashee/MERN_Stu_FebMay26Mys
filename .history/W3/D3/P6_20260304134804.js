// Nested Objects
const student = {
    firstName:"Rhaashee",
    LastName:"Lokesh",
    scores:{
        Maths : 80,
        Science : 90
    },
    hobbies:["Reading","Dancing"],
    fullname: function(){
        return this.firstName + " "+this.lastname;
    };
};
console.log(student.scores.Science);
console.log(student.name);
console.log(student.hobbies);