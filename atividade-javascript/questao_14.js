function somarCincoValores() {
    let soma = 0;
    for (let contador = 1; contador <= 5; contador++) {
        const numero = Number(prompt("Informe o número " + contador + ":"));
        soma += numero;
    }
    return soma;
}
// Execute no Console: console.log(somarCincoValores());
// Teste 1: 1, 2, 3, 4, 5. Resultado: 15.
// Teste 2: -1, -2, -3, -4, -5. Resultado: -15.
// Teste 3: 0, 2.5, -2.5, 4, 1. Resultado: 5.
