function contarFaixasDeNotas() {
    let notasAltas = 0;
    let notasMedias = 0;
    let notasBaixas = 0;
    for (let estudante = 1; estudante <= 6; estudante++) {
        const nota = Number(prompt("Informe a nota do estudante " + estudante + " (0 a 10):"));
        if (nota >= 7) {
            notasAltas++;
        }
        else if (nota >= 5 && nota < 7) {
            notasMedias++;
        }
        else {
            notasBaixas++;
        }
    }
    console.log("Notas >= 7: " + notasAltas);
    console.log("Notas >= 5 e < 7: " + notasMedias);
    console.log("Notas < 5: " + notasBaixas);
}
// Execute no Console: contarFaixasDeNotas();
// Teste 1: 7, 5, 4.9, 10, 6.9, 0. Resultado: 2, 2 e 2.
// Teste 2: 7, 8, 9, 10, 7.5, 8.5. Resultado: 6, 0 e 0.
// Teste 3: 0, 1, 2, 3, 4, 4.9. Resultado: 0, 0 e 6.
