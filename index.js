var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Welcome here');
});

app.listen(port);
