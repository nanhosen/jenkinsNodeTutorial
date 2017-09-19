var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worlddd!");
});

app.listen(4000);