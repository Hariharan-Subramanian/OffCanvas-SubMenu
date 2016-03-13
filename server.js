var express = require('express');
var app = express();
app.use("/", express.static(__dirname));
app.listen(3000);
console.log("listening Off Canvas Menu By Hariharan");
console.log("Browesr Enter Localhost:3000");
