var express = require('express')
var cors = require('cors')
var app = express()
const path = require('path')
var fs = require('fs')

var http = new XMLHTTPRequest();

// app.use(cors());
// app.use(express.static(path.join(__dirname, 'src')));
// app.use(express.static(path.join(__dirname, 'build')));

  http.open('GET', /Election.json', true);
  http.setRequestHeader('Content-Type', 'application/json');
  fs.readFile('./build/contracts/Election.json', function(err, data){
    http.send(data);
  });

// app.get('/Election.json', function(req, res){
// 		fs.readFile('./build/contracts/Election.json', function(err, data) {
//     res.send(data);
//   });
// });

  http.open('SET', 'view engine', 'ejs');
// app.set('view engine', 'ejs');
//
// app.get('/', function (req, res) {
//   res.render('vista');
// });
//
// app.post('/Volver', function (req, res) {
//   res.send(JSON.stringify());
// });
//
// app.listen(3000, function () {
//   console.log('Server listening on port 3000!');
// });
