function encontrarMaiorNumero() {
    let maior = Number(prompt("Informe o número 1:"));
    for (let contador = 2; contador <= 5; contador++) {
        const numero = Number(prompt("Informe o número " + contador + ":"));
        if (numero > maior) {
            maior = numero;
        }
    }
    return maior;
}
// Execute no Console: console.log(encontrarMaiorNumero());
// Teste 1: -8, -3, -10, -1, -5. Resultado: -1.
// Teste 2: 9, 4, 3, 2, 1. Resultado: 9.
// Teste 3: 0, 0, 0, 0, 0. Resultado: 0.
