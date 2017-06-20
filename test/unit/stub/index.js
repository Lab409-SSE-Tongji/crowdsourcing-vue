var express = require('express');
var app = express();

var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/session', function(req, res, next) {
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


app.get('/api/user/projectExperience', function(req, res, next) {
  res.send({
    'status':'200',
    'result': [{
      'id': 1,
      'accountId': 1,
      'certificate': null,
      'projectName': 'Crowdsourcing',
      'projectRegion': 'ios',
      'projectAddress': 'www.github.com',
      'projectText': 'test'
    }]
  });
})

app.get('/api/requirement', function(req, res, next) {
  res.send({
    'status':'200',
    'result': [{
      'requirement_id': 1,
			'requirement_type':'ios',
			'requirement_name':'test',
			'requirement_state': 1

    }]
  });
})

app.get('/api/project', function(req, res, next) {
  res.send({
    'status':'200',
    'result': [{
      'project_id': 1,
			'project_type':'ios',
			'project_name':'test',
			'username':'同济大学软件工程实验室',
			'project_state': 1

    }]
  });
})



app.use((req, res, next) => {
    res.send("404 not found");
})

app.listen(3000);
