// Nested Objects
const student = {
    name:"Rhaashee",
    scores:{
        Maths : 80,
        Science : 90
    },
    hobbies:["Reading","Dancing"],
    fullname: function(){
        return this.firstName + " "+this.lastname
    }
};
console.log(student.scores.Science);
console.log(student.name);
console.log(student.hobbies);