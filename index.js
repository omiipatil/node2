const express=require("express")//it is very important to load express package in our application


const app=express()  //the express is function it is call and return app object it is responsible for creating whether server and route and middleware


const port=8000  //here create seprate port this allow to run our code

//here creating the route

app.get("/",(request,response)=>{
    response.send("hello world")  //here simple pass the  text data

   
}).listen(port)
