var express = require('express');
var moment = require('moment');
var app = express();

app.get('/:date', function (req, res) {
  var date = Number(req.params.date);
  var mmnt = moment(isNaN(date) ? req.params.date : date);
  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    unix: mmnt.valueOf(),
    natural: mmnt.format('MMMM D, YYYY')
  }));
});

app.listen(8080, function () {
  console.log('Timestamp microservice on port 8080...');
});