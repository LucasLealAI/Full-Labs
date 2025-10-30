let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

// criação das functions

function desenhar_quadrado(x, y, w, h, cor) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, w, h);
    ctx.closePath();
}

function desenhar_linha(x1, y1, x2, y2, cor) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function desenhar_circulo(x, y, r, corPreenchimento, corBorda) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = corPreenchimento;
    ctx.strokeStyle = corBorda;
    ctx.arc(x, y, r, 0, 2.5 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(x, y, r, inicio, fim, cor) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = cor;
    ctx.arc(x, y, r, inicio, fim);
    ctx.stroke();
    ctx.closePath();
}

function escrever(x, y, palavra, cor, fonte) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.font = fonte
    ctx.textAlign = "center";
    ctx.fillText(palavra,x,y);
    ctx.closePath();
}

// os desenhos em si

desenhar_quadrado(0, 0, 45, 45, 'blue');
desenhar_quadrado(255, 0, 45, 45, 'red');
desenhar_quadrado(270, 135, 30, 30, 'cyan');
desenhar_quadrado(0, 124, 30, 30, 'cyan');
desenhar_quadrado(0, 150, 30, 30, 'cyan');

desenhar_quadrado(0, 270, 30, 30, 'yellow');
desenhar_quadrado(0, 240, 30, 30, 'yellow');
desenhar_quadrado(30, 270, 30, 30, 'yellow');

desenhar_quadrado(270, 270, 30, 30, 'black');
desenhar_quadrado(270, 240, 30, 30, 'black');
desenhar_quadrado(240, 270, 30, 30, 'black');

desenhar_linha(300, 0, 150, 150, 'red');
desenhar_linha(0, 0, 150, 150, 'blue');
desenhar_linha(300, 149, 0, 150, 'green');
desenhar_linha(150, 149, 150, 263, 'grey');

// quadrado random
desenhar_quadrado(112, 150, 38, 38, 'red');

// bolas (la ele)
desenhar_circulo(217, 225, 15, 'yellow', 'green');
desenhar_circulo(75, 225, 15, 'yellow', 'green');
desenhar_circulo(150, 300, 38, 'cyan', 'green');

// linhas do meio
desenhar_arco(150, 300, 56, 1.5 * Math.PI, 0, 'green');
desenhar_arco(150, 300, 75, 0, 1.5 * Math.PI, 'green');

desenhar_circulo(150, 112, 15, 'cyan', 'green');
desenhar_arco(150, 150, 68, 3 * Math.PI, 0, 'green');
desenhar_arco(150, 150, 90, 1.75 * Math.PI, 2 * Math.PI, 'green');
desenhar_arco(150, 150, 90, 1 * Math.PI, 1.25 * Math.PI, 'green');

escrever(150, 40, 'Canvas', 'black', '20px Arial');

// casinha

// solzinho

function quadrado(x, y, largura, altura, cor) {
    ctx1.fillStyle = cor;
    ctx1.fillRect(x, y, largura, altura);
}

function circulo(x, y, raio, cor) {
    ctx1.fillStyle = cor;
    ctx1.beginPath();
    ctx1.arc(x, y, raio, 0, 2 * Math.PI);
    ctx1.fill();
}

function triangulo(x1, y1, x2, y2, x3, y3, cor) {
    ctx1.fillStyle = cor;
    ctx1.beginPath();
    ctx1.moveTo(x1, y1);
    ctx1.lineTo(x2, y2);
    ctx1.lineTo(x3, y3);
    ctx1.closePath();
    ctx1.fill();
}

// nn faço ideia como que faz essa curva, pesquisando não entendi muito

function curvaRio(x1, y1, x2, y2, cx, cy, cor) {
    ctx1.fillStyle = cor;
    ctx1.beginPath();
    ctx1.moveTo(x1, y1);
    ctx1.lineTo(x2, y2);
    ctx1.quadraticCurveTo(cx, cy, x1, 300);
    ctx1.closePath();
    ctx1.fill();
}

function desenharSol() {
    circulo(220, 70, 40, '#FFFF00');
}

function desenharChao() {
    quadrado(0, 220, 300, 80, '#808080');
}

function desenharCachoeira() {
    ctx1.fillStyle = '#3E7DFF';
    ctx1.beginPath();
    ctx1.moveTo(0, 170);
    ctx1.lineTo(40, 220);
    ctx1.lineTo(130, 220);
    ctx1.quadraticCurveTo(100, 300, 0, 300);
    ctx1.closePath();
    ctx1.fill();
}

function desenharArvore(xTronco, yTronco, largura, altura, xFolha, yFolha, raio) {
    quadrado(xTronco, yTronco, largura, altura, '#8B4513');
    circulo(xFolha, yFolha, raio, '#006400');
}

function desenharCasa() {
    quadrado(120, 150, 80, 70, '#8B4513');

    // telhado

    triangulo(110, 150, 210, 150, 160, 110, '#E57373');
    
    // janelas

    quadrado(130, 160, 20, 20, '#87CEEB');

    quadrado(170, 160, 20, 20, '#87CEEB');

    // porta

    quadrado(152, 190, 16, 30, '#5C2E00');
}

desenharSol();
desenharChao();
desenharCachoeira();
desenharArvore(45, 180, 20, 40, 55, 165, 25);
desenharArvore(245, 220, 20, 40, 255, 205, 25);
desenharCasa();