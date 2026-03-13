// try catch Basics
// refernce 
try{
    console.log("Trying to access undefined variable");
    console.log("notDefined");
}
catch(err){
    console.log("Error caught ",err.name,"-",err.message);
}