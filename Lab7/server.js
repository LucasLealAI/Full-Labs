require("colors");

var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://LucasLealAI:123@cluster0.ta2qkwz.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true });

var db = client.db("exemplo_db")
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);

// é tudo ez, só falta tu saber a diferença de get e post e dps só copiar oq
// voce fez na aula 9 que tá lá no github tlg?

// Lab 8

let usuarios = []

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Lab2project.html");
});

app.get("/cadastro", (req, res) => {
  res.sendFile(__dirname + "/views/Lab8cadastro.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/Lab8login.html");
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
        res.render("resposta", {mensagem: `Bem-vindo, ${nome}!`})
    } else {
        res.render("resposta", {mensagem: "Falha no usuário, tente novamente."})
    }
})

app.listen(80, () => {
  console.log("80");
});

// Lab 9

app.post("/cadastrar_usuario", function(req, resp) {
  var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

  usuarios.insertOne(data, function (err) {
    if (err) {
      resp.render('resposta_usuario', {resposta: "Erro ao cadastrar o usuario!"})
    }else {
      resp.render('resposta_usuario', {resposta: "Usuario cadastrado com sucesso!"})
    };
  });
});

app.post("/logar_usuario", function(req, resp) {
  var data = { db_nome: req.body.nome, db_login: req.body.login, db_senha: req.body.senha };

  usuarios.insertOne(data, function (err) {
    if (items.length == 0) {
      resp.render('resposta_usuario', {resposta: "Usuario/senha não encontrado!"})
    } else if (err) {
      resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
    } else {
      resp.render('resposta_ususario', {resposta: "Usuario logado com sucesso!"})
    };
  });
});