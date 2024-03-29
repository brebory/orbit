var express = require('express')
  , app = express()
  , http = require('http')
  , path = require('path')
  , routes = require('./routes')
  , server = require('http').createServer(app);

app.configure(function() {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + "/views");
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, "/public")));
});

app.configure('development', function() {
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  
  res.sendfile('index.html', { root: "public" });

});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
