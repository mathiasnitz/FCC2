let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html';
 

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

app.get("/",(req, res) => {
    res.sendFile(absolutePath);
});

 express.static();

 module.exports = app;