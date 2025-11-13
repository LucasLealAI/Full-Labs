require("colors");

var http = require('http');
var express = require('express');
var bodyParser = require("body-parser")

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("servidor rodando...".rainbow)


// é tudo ez, só falta tu saber a diferença de get e post e dps só copiar oq
// voce fez na aula 9 que tá lá no github tlg?

app.get("/", (req, res) => {
  res.sendFile(__dirname + "Lab2project.html");
});

app.get("/cadastra", (req, res) => {
  res.sendFile(__dirname + "Lab7cadastro.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "Lab7login.html");
});

app.post("/cadastrar", function(req, res) {
    const { nome, senha } = req.body;
    const existente = usuarios.find(u => u.nome === nome);
    
    if (existente) {
        res.render("resposta", {mensagem: "Usuário já cadastrado!"})
    } else {
        usuarios.push({ nome, senha })
        res.render("resposta", {mensagem: "Cadastro realizado com sucesso!"})
    }
})

app.post("/logar", (req, res) => {
    const { nome, senha } = req.body;
    const usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

    if (usuario) {
        res.render("resposta", {mensagem: "Bem-vindo, ${nome}"})
    } else {
        res.render("resposta", {mensagem: "Falha no usuário, tente novamente."})
    }
})