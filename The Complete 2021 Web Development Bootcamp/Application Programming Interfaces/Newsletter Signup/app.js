const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
require('dotenv').config();
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    
    const data = {
        members: [
            {
                email_address:email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = process.env.URL+"/"+process.env.LIST_ID;

    const options = {
        method: "POST",
        auth: "ksmith1:"+process.env.API_KEY
    }

    const request = https.request(url, options, function(response){
        request.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})