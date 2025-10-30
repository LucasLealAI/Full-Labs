require("colors");

var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...".rainbow)

app.get('/', function(requisicao, resposta){
    resposta.redirect('Lab1.html');
})

// é tudo ez, só falta tu saber a diferença de get e post e dps só copiar oq
// voce fez na aula 9 que tá lá no github tlg?

app.get('/cadastrar',function(requisicao, resposta){
    console.log('Requisicao recebida por get!');

    let nome = requisicao.query.nome
    let email = requisicao.query.email;
    let telefone = requisicao.query.telefone
    let nascimento = requisicao.query.nascimento;

    console.log(nome, email, telefone, nascimento)

    resposta.render("resposta.ejs", {metodo: "GET", nome, email, telefone, nascimento});
})