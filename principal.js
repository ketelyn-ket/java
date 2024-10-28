//var titulo = document.querySelector("titulo");
//titulo.textContent = "Aparecida Nuticionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-Peso");
var Peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso < 0 || peso > 100){
    console.log("Peso invalido");
    pesoEhValido = false;
}

if(altura < 0 || altura > 3.00){
    console.log("Altura invalido");
    alturaEhValido = false;
}

var imc = peso / (altura * altura);

tdImc.textContent = imc;