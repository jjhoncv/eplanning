var express = require("express");

var main = require("./../src/main")

let app = express();

app.get("/", function (req, res) {
    res.send("Hello World!")
})

app.listen(3000, function() {
    console.log("here!")
})