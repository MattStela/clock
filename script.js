const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);

//pega o horário e põe nas variáveis
let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();
console.log("Hora: " + hr + "\nMinuto: " + min + "\nSegundos: " + seg);

//lógica
let posicaoHr = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let posicaoMin = (min * 360) / 60 + (seg * (360 / 60)) / 60;
let posicaoSeg = (seg * 360) / 60;

function executarRelogio() {
  posicaoHr = posicaoHr + (3/360) //30 graus em 3600 segundos
  posicaoMin = posicaoMin + (6/60); //6 graus em 60 segundos
  posicaoSeg = posicaoSeg + 6; //6 graus em 1 segundo

  //executa no css a lógica
  PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)"; //rotate(99deg);
  PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)"; //rotate(99deg);
  PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)"; //rotate(99deg);
}

var intervalo = setInterval(executarRelogio, 1000);
