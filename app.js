var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Worlsd!");
});

app.listen(4000);