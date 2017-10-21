var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors({origin: 'http://localhost:8080'}));

app.use(bodyParser.json());


consign({cwd: 'app'})
	.include('services')
	.then('routes')
	.into(app);

module.exports = app;
