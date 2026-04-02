// JWT flow with login ,refresh-style logic as well as secure verification 
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express(); 
app.use(express.json());

const secretKey = "MysecretKey";
const refreshsecretKey = "MyNewsecretKey";

// Indicates IN-MEMORY STORAGE for refresh tokens 
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && aunthHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try {
        req.user = jwt.verify(token, secretKey, {
            algorithms :["HS256"],
            issuer : "jwt-example"
        });
        next();
    } catch (error) {
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
                success : false,
                message : "Access token has expired"
            });
        }
        return res.status(401).json({
            success : false,
            message : "Access token is invalid"
        });
    }
}

app.post("/login",function(req,res){
    const{email,password} = req.body;
    if(email !== "email@email.com" || password !== "pass@123"){
        return response.staus(401).json({
            success : false,
            message :"Invalid Credentials"
        });
    }
    const accessToken = jwt.sign({
        userId : 101,
        email : email,
        role : "member"
    },secretKey,{expiresIn:"10m",
        algorithm : "HS256", 
        issuer : "jwt-example"});

    // Resigning / refreshimg tokens 
    const refreshToken = jwt.sign({
        userId : 101,
        email : email
        
    },refreshsecretKey,{expiresIn:"10d" //d:days m:mins h:hour 
        ,algorithm : "HS256", 
        issuer : "jwt-example"});
        refreshTokens.push(refreshToken);
        res.json({
            success:true,
            message: "Login successful",
            accessToken: accessToken,
            refreshToken:refreshToken
        });
});

app.post("/refresh",function(req,res){
    const{refreshToken} = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            success:false,
            message:"Refresh token is missing or invalid."
        });
    }
    try {
        const decoded = jwt.verify(refreshToken,refreshsecretKey,{
        algorithms : ["HS256"], 
        issuer : "jwt-example"
        });
        const newAccessToken = jwt.sign({
            userId:decoded.userId,
            email:decoded.email,
            role:"member"
        },secretKey,{expiresIn:"10m",
        algorithms : "HS256", 
        issuer : "jwt-example"});
        res.join({
            success:true,
            accessToken:newAccessToken
        });
    } catch (error) {
        res.status(403).json({
            success:false,
            message:"Refresh token Verification failed."
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT Demo server running @ http://localhost:4000");
}); 

// curl -X POST http://localhost:4000/login -H "Content-Type: application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
// curl -X POST http://localhost:4000/refresh -H "Content-Type: application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"
// curl -X POST http://localhost:4000/me -H "Content-Type: application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"