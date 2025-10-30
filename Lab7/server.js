require("colors");

var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...".rainbow)

app.get('/', function(requisicao, resposta){
    resposta.redirect('Lab1/Lab1.html');
})