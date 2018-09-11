const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(helmet());
app.disable('x-powered-by');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/bower_components'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');

});

app.listen(3000, function() {
  console.log('listening on port 3000')
});