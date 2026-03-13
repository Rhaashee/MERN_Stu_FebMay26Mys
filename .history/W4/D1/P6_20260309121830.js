// finally
function example(){
    try{
        console.log("Example in try block");
        return "TRY_RETURN";
    }
    finally{
        console.log("This is printed! ",example());
    }
}
console.log("Example result: ",example());
    