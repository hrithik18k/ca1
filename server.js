const express = require("express")
const app = express()
require("dotenv").config()
const PORT = 3000;


app.use(express.json())

const connectdb =require("./config/db")


app.listen(PORT,()=>{
    console.log(`Server is running on port${PORT}`)
});