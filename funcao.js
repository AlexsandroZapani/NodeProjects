// DECLARAÇÃO DE FUNÇÃO// Declaração de função
function somar(num1, num2) {
    return num1 + num2;
}

// Guardar funções em variaceis
const somar = function (num1, num2) { return num1 + num2; }
// Chmar a função pela variavel
somar(1, 2);
// Passando por parâmetro
outraFuncao(somar);
// Esse comportamento se chama Callback, 
// conhecido em outras linguagens como injeção de dependências, 
// ou inversão de controle.

// Arrow functions
// Escreve a mesma função de maneira mais sucinta
// util para passar funções pequenas ou anonimas
const somar = (num1, num2) => num1 + num2;