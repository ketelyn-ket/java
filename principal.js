//var titulo = document.querySelector("titulo");
//titulo.textContent = "Aparecida Nuticionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-Peso");
var Peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

if(peso< 0){
    console.log("peso invalido");
}

var imc = peso / (altura * altura);

tdImc.textContent = imc;