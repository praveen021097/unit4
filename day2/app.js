const express = require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("hello world")
});

app.get("/books",(req,res)=>{
    res.send({math:"radhakrishnan",english:"william shakespeer",java:"hardy sandhu",c:"denish ritchie"});
})
app.listen(3000,()=>{
    console.log("listening the port 3000")
});