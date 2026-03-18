// Why use async/await
function getUser(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({id:101,name:"KIRAN"});
        },1000);
    });
}

function getOrders(userId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(["order-A","order-B"]);
        },12000);
    });
}

async function showUserAndOreders(){
    const user = await getUser();
    console.log("User loaded: ",user.name);

    const orders = await getOrders(user.id);
    console.log("Orders Loaded",orders);
}

showUserAndOreders();