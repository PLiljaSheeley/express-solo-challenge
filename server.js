var express = require('express'),
    app = express();
var path = require('path');
var port = 3000;

var balance = require('./public/modules/balance.js');
var currency = require('./public/modules/formatCurrency.js');
var random = require('./public/modules/random.js');

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.get('/balance', function(req, res){
	res.send(balance.acctBalance(1,1000000));
} )
app.listen(port, function(){
  console.log('Listening for requests on port:', port);
});