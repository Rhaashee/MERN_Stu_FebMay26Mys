// finally
function example(){
    try{
        console.log("Example in try block");
        return "TRY_RETURN";
    }
    finally{
        console.log("This is printed!);
    }
}
console.log("Example result: ",example());
    