const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const raio = 15

let imagemX = canvas.width / 2;
let imagemY = canvas.height / 2;

function fixo(valor, min, max) {
    return Math.max(min, Math.min(valor, max));
}

function desenhar() {
    ctx.beginPath();
    ctx.arc(imagemX, imagemY, raio, 0, Math.PI * 2);
    ctx.fillstyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

canvas.addEventListener('mousemove', (evento) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = evento.clientX - rect.left;
    const mouseY = evento.clientY - rect.top;

imagemX = clamp(mouseX, imagemRaio, canvas.width - imagemRaio);
imagemY = clamp(mouseY, imagemRaio, canvas.height - imagemRaio);

desenhar();

});

desenhar();