const express = require('express');

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello, World!</h1>");
});

app.get("/about", function (req, res){
    res.send("<p>Hi, this is a short bio because that's what you put on about pages!</p>");
});

app.get("/contact", function (req, res){
    res.send("Contact me at --email--");
});

app.get("/hobbies", function(req, res){
    res.send("I love dogs");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
