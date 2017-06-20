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

app.post('/api/register', function(req, res, next) {
  res.send({
    'status':'201'
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

app.post('/api/user/projectExperience', function(req, res, next) {
  res.send({
    'status':'201',
    'result': [{
      'certificate': 'test',
      'project_name': 'test',
      'project_region': 'test',
      'project_address': 'test',
      'project_text': 'test'
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

app.post('/api/requirement', function(req, res, next) {
  res.send({
    'status':'201'
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

app.get('/api/requirements', function(req, res, next) {
  res.send({
    'status':'200',
    'result': [{
      'requirement_id': 1,
      'start_time': '2016-06-07',
      'end_time': '2016-06-09',
      'need_manager': 1,
      'requirement_detail': 'this is why we live',
      'requirement_state': 'www.github.com',
      'requirement_name': 'Crowdsourcing',
      'requirement_type': 'ios',
			'proposer':3
    }, {
      'requirement_id': 2,
      'start_time': '2016-06-04',
      'end_time': '2016-06-07',
      'need_manager': 0,
      'requirement_detail': 'in me the tiger sniff the rose',
      'requirement_state': 'www.gayhub.com',
      'requirement_name': 'WebGis',
      'requirement_type': 'web',
			'proposer':5
    }
    ]
  });
})

app.use((req, res, next) => {
    res.send("404 not found");
})

app.listen(3000);
