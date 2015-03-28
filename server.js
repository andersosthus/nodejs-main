var express = require('express');
var app = express();
var startTime = new Date();

app.get('/', function(req, res) {
  var elapsedTime = new Date().getTime() - startTime.getTime();
  console.log('request recieved, sending ' + elapsedTime.toString());
  res.end('This server has been running for ' + elapsedTime + 'ms.\n');
});

var port = 80;
server = app.listen(port);

console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
