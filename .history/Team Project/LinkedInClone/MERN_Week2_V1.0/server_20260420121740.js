// Main Express server entry point

const app = require("./app");

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});

// npm init -y
// npm install express cookie-parser express-session jsonwebtoken 

