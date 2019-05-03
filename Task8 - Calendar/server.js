var express = require('express');
var app = express();
var request = require('request')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var url = 'http://api.openweathermap.org/data/2.5/weather?id=625665&APPID=f3a187add5d796a572d4024316b93e6b';
var weather;

request(url, (error, res, body)=> {
  if (!error && res.statusCode === 200) {
    weather = body;
  } else {
    console.log("Got an error: ", error, ", status code: ", res.statusCode)
  };
});

app.get('/', function (req, res) {
  if (res.statusCode === 200) {
    res.send(weather);
  }else {
    res.send('We have a problem');
  };
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
