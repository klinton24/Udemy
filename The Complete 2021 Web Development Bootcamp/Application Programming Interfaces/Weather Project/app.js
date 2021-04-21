const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a2a4b6f6e2431d3e1f2aa82c0c42957";
    https.get(url, function(response) {
        console.log(response);
    })
    res.send("Server is up and running.");
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.")
});