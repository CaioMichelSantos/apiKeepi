var http = require('http');
var app = require('./config/express');

http.createServer(app)
.listen(3000, () => {
	console.log('Servidor iniciado: localhost:3000');
});
