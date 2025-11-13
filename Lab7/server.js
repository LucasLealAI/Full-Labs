require("colors");

const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const { MongoClient } =

require("mongodb")

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static(__dirname + "/views"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

console.log("servidor rodando...".rainbow)

const uri = "mongodb+srv://LucasLealAI:#$Ta020770***@cluster0.e5grtgs.mongodb.net/?appName=Cluster0"

let usuarios = []

// é tudo ez, só falta tu saber a diferença de get e post e dps só copiar oq
// voce fez na aula 9 que tá lá no github tlg?

// Lab 8

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

