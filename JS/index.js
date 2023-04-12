//sistema de formulario e validaçao de conta
var cidades = document.getElementById("cidades")
var precipitcao = document.getElementById("precipitacao")
var tempo = document.getElementById("tempo")
console.log(tempo)
var tempoV = tempo.value
function validacao(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email == "contatogalofiap@gmail.com" && senha == "12345"){
    cidades.removeAttribute("disabled")
    precipitacao.removeAttribute("disabled")
    tempo.removeAttribute("disabled")
    }
}
//contatogalofiap@gmail.com / 12345
function selectCidades() {
    var c1 = document.getElementById("cidades");
    var capacidade = document.getElementById("capacidade");
    var CS = c1.options[c1.selectedIndex].value;
  
    if (CS == "op1") {
      capacidade.innerHTML = "Capacidade: 10mm de chuva";
    } else if (CS == "op2") {
      capacidade.innerHTML = "Capacidade: 15mm";
    } else if (CS == "op3") {
      capacidade.innerHTML = "Capacidade: 20mm";
    } else if (CS == "op4") {
      capacidade.innerHTML = "Capacidade: 30mm";
    } else {
      capacidade.innerHTML = "Capacidade:";
    }
  }
// Quantidade de chuva
var = quantidade =
// Intensidade da chuva em mm/h
var intensidadeChuva =
// Tempo de chuva em horas
var tempoChuva = 
// Quantidade de chuva em mm
var quantidadeChuva = intensidadeChuva * tempoChuva;

  function galoWeather(){
    if () {
        if () {
            ;
          } else {
            ;
          }
        } else if () {
          if () {
            ;
          } else {
            ;
          }
