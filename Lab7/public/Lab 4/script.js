let numeroSecreto = Math.floor(Math.random() * 100);

console.log(numeroSecreto)

let menores = [];
let maiores = [];

function imprimeGuess() {
  let numero = parseInt(document.getElementById("numero").value);
  
  console.log(numero)

  let mensagem = document.getElementById("mensagem");

  if (numero === numeroSecreto) {
    mensagem.textContent = "número igual"
    mensagem.style.setProperty("background-color", "green")
  } else if (numero < numeroSecreto) {
    mensagem.textContent = "número maior" 
    mensagem.style.setProperty("background-color", "red")
    menores.push(numero)
    document.getElementById("menores").innerHTML = menores
  } else if (numero > numeroSecreto) {
    mensagem.textContent = "número menor";
    mensagem.style.setProperty("background-color", "red");
    maiores.push(numero);
    document.getElementById("maiores").innerHTML = maiores
  }
}