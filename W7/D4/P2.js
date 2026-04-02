// Setting and reading cookies 
const express = require("express");
const cookieParser = require("cookie-parser"); // importing third party module
const app = express();

// cookie-parser reads the cookie request header and plces the parsed values into req. cookies 
app.use(cookieParser());
app.get("/set-languague",function(req,res){
    res.cookie("languague","english",{
        maxAge:60*60*1000 //tells us how long cookie will exists in browser 
    });
    res.send("Languague cookie set to 'english'");
});
app.get("read-languague",function(req,res){
    const languague = req.cookies.languague;

    res.json({
        message:"Cookie read from request.",
        languague : languague || "No languague cookie found"
    });
});

app.listen(4000,function(){
    console.log("Express server running @ http://localhost:4000");
});