const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Set the port and DB uri
const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI;

const app = express();
app.use(cors());
app.use(express.json());

//DB Connection
mongoose.connect(URI,{useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err));

//Serve static pages in production
if(PORT!==5000){
    app.use(express.static(path.join(__dirname,"client","build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client","build","index.html"));
    });
}    

// Start Server
app.listen(PORT,()=>console.log("Server is Running"));