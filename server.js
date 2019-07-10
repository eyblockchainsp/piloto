var express = require('express');
var app = express();
const path = require('path');
var fs = require('fs');

//app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/Election.json', function(req, res){
		fs.readFile('./build/contracts/Election.json', function(err, data) {
		res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  });
});

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.render('vista');
});

app.post('/Volver', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify());
});

app.listen(8081, function () {
  console.log('Server listening on port 8081!');
});
