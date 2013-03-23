var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res) {
  
  res.sendfile('index.html', { root: "game" });

});

app.listen(port);
console.log("Express server running on port " + port + ".");
