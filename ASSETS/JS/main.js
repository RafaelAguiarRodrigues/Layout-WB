const cabecalholista = document.querySelectorAll(".cabecalho__item");
const imoveis = cabecalholista[3];
const nossoApp = cabecalholista[4];
/* avisa que não esta pronto*/
function avisa () {
    alert("Ainda em construção");
}

imoveis.addEventListener('click', avisa);
nossoApp.addEventListener('click', avisa);