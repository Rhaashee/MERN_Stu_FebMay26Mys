const app = require("./app")

app.get("/health",(req,res)=>{
    res.json({
        message : "API Running Successfully",
    })
})
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});