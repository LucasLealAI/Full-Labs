let numeroSecreto = Math.floor(Math.random() * 100);

let menores = [];
let maiores = [];

function imprimeGuess() {
  let numero = document.getElementById("numero");
  let entrada = document.getElementById("entrada");

  let mensagem = document.getElementById("mensagem");

  if (entrada === numeroSecreto) {
    mensagem.textContent = "número igual"
    mensagem.style.setProperty("background-color", "green")
  } else if (entrada < numeroSecreto) {
    mensagem.textContent = "número maior" 
    mensagem.style.setProperty("background-color", "red")
    menores.push(numero)
    document.getElementById("menores").textContent = menores
  } else if (entrada > numeroSecreto) {
    mensagem.textContent = "número menor";
    mensagem.style.setProperty("background-color", "red");
    maiores.push(numero);
    document.getElementById("maiores").textContent = maiores
  }
}