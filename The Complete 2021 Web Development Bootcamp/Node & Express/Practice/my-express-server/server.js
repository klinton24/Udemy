const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello, world!</h1>");
})

app.get("/contact", function(req,res) {
    res.send("Contact me at klinton@gmail.com");
});

app.get("/about", function(req, res){
    res.send("Find out more about me <a href='https://www.linkedin.com/in/klinton-smith/'>here</a>.")
});

app.listen(3000, function() {
    console.log("Server started on Port 3000");
});