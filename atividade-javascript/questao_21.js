function contarParesEImpares() {
    let pares = 0;
    let impares = 0;
    for (let contador = 1; contador <= 10; contador++) {
        const numero = Number(prompt("Informe o número inteiro " + contador + ":"));
        if (numero % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
    }
    console.log("Pares: " + pares);
    console.log("Ímpares: " + impares);
}
// Execute no Console: contarParesEImpares();
// Teste 1: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Resultado: 5 pares e 5 ímpares.
// Teste 2: 0, 2, 4, 6, 8, -2, -4, -6, -8, -10. Resultado: 10 pares e 0 ímpares.
// Teste 3: 1, 3, 5, 7, 9, -1, -3, -5, -7, -9. Resultado: 0 pares e 10 ímpares.
