// Immediately invoked Function Expresion [IIFE]

(function(){
    console.log("Basic IIFE executes Immediately");
})();

// IIFE with Parameters
(function(appName,version){
    console.log("App : ",appName," Version :c");
})("NodeJs","v22.19.0");