const express =require('express');
const app=express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser")
const operation = require("./routes/operation");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });




app.use("/api",operation)

app.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at port number 5000");
    }
})