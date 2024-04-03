// Declare variáveis para armazenar nome e idade
let nome = "João";
let idade = 30;

// Mostrar mensagem com as variáveis
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// Operações Aritméticas
let numero1 = 10;
let numero2 = 5;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

// Strings e Concatenação
let palavra1 = "Olá";
let palavra2 = "Mundo";

let frase = palavra1 + " " + palavra2;
console.log("Frase:", frase);

// Acessando Caracteres
let palavra = "JavaScript";
let primeiroCaractere = palavra.charAt(0);
let ultimoCaractere = palavra.charAt(palavra.length - 1);
console.log("Primeiro caractere:", primeiroCaractere);
console.log("Último caractere:", ultimoCaractere);

// Operações Booleanas
let num1 = 20;
let num2 = 30;

console.log("num1 é maior que num2?", num1 > num2);
console.log("num1 é menor que num2?", num1 < num2);
console.log("num1 é igual a num2?", num1 === num2);

// Escopo de Variáveis
let variavelFora = "Variável fora da função";
function testeEscopo() {
  let variavelDentro = "Variável dentro da função";
  console.log(variavelFora);
  console.log(variavelDentro);
}
console.log(variavelFora);
// console.log(variavelDentro); // Isso resultaria em um erro, pois a variável está dentro do escopo da função e não pode ser acessada aqui

// Uso do Console
console.log("Isso é um log.");
console.warn("Isso é um aviso.");
console.error("Isso é um erro.");
console.info("Isso é uma informação.");

// Conversão de Tipos
let numeroString = "10";
let numeroInteiro = parseInt(numeroString);
console.log("Número inteiro:", numeroInteiro);

// Funções
function soma(x, y) {
  return x + y;
}

let resultadoSoma = soma(5, 7);
console.log("Resultado da soma:", resultadoSoma);
