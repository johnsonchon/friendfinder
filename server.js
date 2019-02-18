var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.use(express.static('./app/public'));
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);






app.listen(PORT, function () {
  console.log('app is listening on port: ' + PORT);
}) 