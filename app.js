var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worlddsd!");
});

app.listen(4000);