//Load environment variables
require("dotenv").config();

const app = require("./app");
const connectDB = require()

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});