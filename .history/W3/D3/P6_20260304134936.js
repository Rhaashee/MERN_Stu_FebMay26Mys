// Nested Objects
const student = {
    firstName:"Rhaashee",
    LastName:"Lokes",
    scores:{
        Maths : 80,
        Science : 90
    },
    hobbies:["Reading","Dancing"],
    fullname: function(){
        return this.firstName + " "+this.lastname;
    };
    greet(){
        console.log("Hi," this.fullname)
    }
};
console.log(student.scores.Science);
console.log(student.name);
console.log(student.hobbies);