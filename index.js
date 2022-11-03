const express=require("express");

const app=express();


app.get("/",(req,res)=>{
    res.send("server started in port no. 8080")
})

app.listen(8080,()=>{
    console.log("server started in port no 8080 ");
})

