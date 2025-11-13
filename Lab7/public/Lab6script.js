const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = "img/html.png";

const imagemLargura = 32;
const imagemAltura = 32;

let X = canvas.width / 2;
let Y = canvas.height / 2;
let dentro = false

img.onload = () => desenhar();

canvas.addEventListener('mousemove', (evento) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = evento.clientX - rect.left;
    const mouseY = evento.clientY - rect.top;

    const metadeLargura = img.width / 2;
    const metadeAltura = img.height / 2;

    X = Math.min(Math.max(mouseX, metadeLargura), canvas.width - metadeLargura);
    Y = Math.min(Math.max(mouseY, metadeAltura), canvas.height - metadeAltura);

    dentro = true
    desenhar()
});

canvas.addEventListener("mouseleave", () => {
    dentro = false
    desenhar()
});

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, X - imagemLargura / 2, Y - imagemAltura / 2, imagemLargura, imagemAltura);
}