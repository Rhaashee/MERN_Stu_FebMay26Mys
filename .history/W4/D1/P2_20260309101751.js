// try catch finally

function parseConfig(){
    try{
        let config = JSON.parse(text);
        return confiug;
    }
    catch(err){

        console.log("Error parsing config: ",err.message);
        return null;
    }
}