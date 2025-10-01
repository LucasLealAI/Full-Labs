function imprimeGuess(certo){
    let guess = document.getElementById("numero").value;

    if(guess < certo){
        document.getElementById("resposta").innerHTML = errado1

    } else if(guess > certo) {
        document.getElementById("resposta").innerHTML = errado2
    } else if(guess = certo) {
        document.getElementById("resposta").innerHTML = errado3
    }
}

function misterioso(){
    const certo = parseInt(Math.random() * 100);
}

function numeracao(){
    let parametro = document.getElementById("parametro").value;
}

imprimeCerto(30)