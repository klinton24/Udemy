const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Osaka&appid=6a2a4b6f6e2431d3e1f2aa82c0c42957&units=imperial";
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherIcon = weatherData.weather[0].icon;
            const weatherImage = "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            res.write("<h1>The temperature in Osaka, Japan is " + temp + "degrees.</h1>");
            res.write("The weather is currently " + weatherDescription + ".</p>");
            res.write("<img src=" + weatherImage +">");
            res.send();
        })
    })
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.")
});