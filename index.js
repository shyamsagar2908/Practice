require('dotenv').config()
const express=require("express");
const app=express();
// const port=3000;

// console.log(process.env.PORT);
app.get("/",(req,res)=>{
    res.send("hello world 2");
})

app.use(express.static("public"));


app.get('/home',(req,res)=>{
res.send("<h1>Hello World application</h1>");
})
app.listen(process.env.PORT,()=>{console.log(`server is running ${process.env.PORT}`)});