// Os exemplos abaixo substituem o fonte abaixo
// quando vc notar a necessidade de repitir variaz vezes um codigo, é quando lações de repeticao sçao uteis
// A repeticao acontecera gracaso ao incremento unario
let x = 0;
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);

// Exeste duas formas de utilizar o operador unario
// quando utilizado como o exmeplo abaixo
// retorna-se o valor de x e depois incrementa-se 1
let x1=0;
console.log(x++);

// quando utilizado como o exmeplo abaixo
// primeiro se aumenta o valor de x em 1 e depois retorna-se o valor de x;
let x20;
console.log(++x);

// Não executara se a expressão logica não for verdadeira
// for (inicialização; condição de execução; incrementp/decremento) diretiva
// Lemos o exemplo a baixo como "para uma dada variavel i, inicializada em zero, ate ela se tornar 10, imprima o valor de i e incrementeo logo após"
for (var i = 0; i < 10; i++) {
    console.log('I=' + i);
}

// Diretiva executada antes da avaliação da expressão logica
// ou seja, a diretiva sera executada pelo menos uma vez
// Lemos o exemplo a baixo como "faca (do) a impressão da palavra imprime, enquanto (while) a variavel chave for verdadeira"
let chave = false;
do {
    console.log('Imprime!')
} while (chave === true);

// while (expressão logica) diretiva
// Avalia o resultado da expressão antes de executar a diretiva associada
// assim se n for oesperado nunca executara
let chave2 = true;
while (chave2 === true) {
    console.log('Imprime!')
    chave2 = false;
}

