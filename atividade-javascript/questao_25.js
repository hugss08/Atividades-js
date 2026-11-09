function somarAteZero() {
    let soma = 0;
    let quantidade = 0;
    while (true) {
        const numero = Number(prompt("Informe um número (0 para encerrar):"));
        if (numero === 0) {
            break;
        }
        soma += numero;
        quantidade++;
    }
    console.log("Soma: " + soma);
    console.log("Quantidade: " + quantidade);
}
// Execute no Console: somarAteZero();
// Teste 1: 4, -2, 7, 0. Resultado: soma 9 e quantidade 3.
// Teste 2: 0. Resultado: soma 0 e quantidade 0.
// Teste 3: -5, -3, 0. Resultado: soma -8 e quantidade 2.
