function contarClassificacoes() {
    let positivos = 0;
    let negativos = 0;
    let zeros = 0;
    for (let contador = 1; contador <= 8; contador++) {
        const numero = Number(prompt("Informe o número " + contador + ":"));
        if (numero > 0) {
            positivos++;
        }
        else if (numero < 0) {
            negativos++;
        }
        else {
            zeros++;
        }
    }
    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Zeros: " + zeros);
}
// Execute no Console: contarClassificacoes();
// Teste 1: 5, -2, 0, 7, -9, 0, 3, 1. Resultado: 4 positivos, 2 negativos e 2 zeros.
// Teste 2: 0, 0, 0, 0, 0, 0, 0, 0. Resultado: 0 positivos, 0 negativos e 8 zeros.
// Teste 3: -1, -2, -3, -4, -5, -6, -7, -8. Resultado: 0 positivos, 8 negativos e 0 zeros.
