// Using the EventEmitter class
const EventEmitter = require("events");

// Create a new event emitter instance : This object can publish events and allow listeners to subcribe
const orderEmitter = new EventEmitter();

// Register a listener for the "orderPlaced" event.　
// Whenever the event is emitted ,the function will execute 
// once() registers a listener that autimatically removes itself after running for the first time 
orderEmitter.once("OrderPlaced",function(orderId,name,orderValue){
    console.log("Bill amount : ",orderValue);
    console.log("Waiting for restaurant to accept order.",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Restaurant accept order.",orderId);
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Assigning Delivery Patner.");
});
orderEmitter.on("OrderPlaced",function(orderId,customerName){
    console.log("Hello",customerName);
    console.log("Mr.Ramesh is delivering you order.",orderId);
});

// Emit the event with extra data : The listener receives the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2403001","Rhaashee","12000");
orderEmitter.emit("OrderPlaced","ORD-2403001","Rhaashee","12000");
