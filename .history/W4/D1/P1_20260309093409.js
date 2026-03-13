// try catch Basics
// reference erroe
try{
    console.log("Trying to access undefined variable");
    console.log("notDefined");
}
catch(err){
    console.log("Error caught ",err.name,"-",err.message);
}
console.log("Program execution")