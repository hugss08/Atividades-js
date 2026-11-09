function calcularMedia() {
    let soma = 0;
    for (let contador = 1; contador <= 4; contador++) {
        const nota = Number(prompt("Informe a nota " + contador + " (0 a 10):"));
        soma += nota;
    }
    return soma / 4;
}
// Execute no Console: console.log(calcularMedia());
// Teste 1: 7, 8, 9, 10. Resultado: 8.5.
// Teste 2: 0, 0, 0, 0. Resultado: 0.
// Teste 3: 10, 10, 10, 10. Resultado: 10.
