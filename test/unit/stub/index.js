var express = require('express');
var app = express();

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , PRIVATE-TOKEN');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
  
app.get('/api/session', function(req, res, next) {
	res.send({
		'status':'200',
		'result': {
			'token':'test',
			'userInfoDetail': {
				'id': 1,
				'realname': 'test',
				'gender': 1,
				'profession': 'test',
				'idcard': '1111'
			}
		}
	});
})

app.use((req, res, next) => {
    res.send("404 not found");
})




app.listen(3000);