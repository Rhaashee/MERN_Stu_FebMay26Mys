// // finally
// function example(){
//     try{
//         console.log("Example in try block");
//         return "TRY_RETURN";
//     }
//     finally{
//         console.log("This is printed!");
//     }
// }
// console.log("Example result: ",example());
    
// return in catch block and still not finally
function example1(){
    try{
        throw new error("New error");
    }
    catch(e){
        console.log("Example 1: caught error");
        return 10;
    }
    finally{

    }
}