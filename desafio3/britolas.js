// Exercício 1: Cálculo de Média
function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const media = (nota1 + nota2) / 2;
    const situacao = media >= 6 ? "Aprovado" : "Reprovado";
    document.getElementById("resultadoMedia").textContent = `Média: ${media.toFixed(2)} - Situação: ${situacao}`;
}

// Exercício 2: Saudação Personalizada
function saudacaoPersonalizada() {
    const nome = document.getElementById("nomeSaudacao").value;
    document.getElementById("resultadoSaudacao").textContent = `Olá, ${nome}! Seja bem-vindo(a)!`;
}

// Exercício 3: Verificação de Maioridade
function verificarMaioridade() {
    const nome = document.getElementById("nomeIdade").value;
    const idade = parseInt(document.getElementById("idade").value);
    const mensagem = idade >= 18 ? `${nome} é maior de idade.` : `${nome} é menor de idade.`;
    document.getElementById("resultadoIdade").textContent = mensagem;
}

// Exercício 4: Soma de Números
function somarNumeros() {
    const num1 = parseFloat(document.getElementById("soma1").value);
    const num2 = parseFloat(document.getElementById("soma2").value);
    const resultado = num1 + num2;
    document.getElementById("resultadoSoma").textContent = `Resultado: ${resultado}`;
}

// Exercício 5: Número Par ou Ímpar
function verificarParOuImpar() {
    const numero = parseInt(document.getElementById("numeroParImpar").value);
    const resultado = numero % 2 === 0 ? "par" : "ímpar";
    document.getElementById("resultadoParImpar").textContent = `O número ${numero} é ${resultado}.`;
}

// Exercício 6: Conversor de Temperatura
function converterTemperatura() {
    const celsius = parseFloat(document.getElementById("tempCelsius").value);
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultadoTemp").textContent = `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
}

// Exercício 7: Calculadora de IMC
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    document.getElementById("resultadoIMC").textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}

// Exercício 8: Contador de Caracteres
function contarCaracteres() {
    const texto = document.getElementById("textoContador").value;
    const total = texto.length;
    document.getElementById("resultadoContador").textContent = `Você digitou ${total} caracteres.`;
}
