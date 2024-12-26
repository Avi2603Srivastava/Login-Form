const express = require('express');
const app = express();
app.get("/",function(req,res){
    res.send("Avinash is running the port")
});
app.get("/contact",function(req,res){
    res.send("Contact me at : avinashsrivastav652@gmail.com");
});
app.get("/about",function(req,res){
    res.send("Hii , guys Avinash this side. I am not going tell anything about me")
});
app.get("/hobbies",function(req,res){
    res.send("My hobbies are loge ke gand me ghusna aur motivate krna")
});
app.get("/title", function(req,res){
    res.send("Kya haal hai tera");
});

app.listen(3000,function(){
    console.log("Server is running at port 3000")
});