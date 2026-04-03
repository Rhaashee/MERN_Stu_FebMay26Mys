// Cookie is used to track session ID

// Simulated server-side session store  
const sessionStore = {
    "abc123":{ //abc123 is session ID 
        userId : 101,
        username: "Rhaashee",
        role:"student"
    }
};

// Simulated browser cookie value 
const browserCookieSessionId = "abc123";

const sessionData = sessionStore[browserCookieSessionId];
console.log("Server-side session data: ",sessionData)