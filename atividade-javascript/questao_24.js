function solicitarNotaValida() {
    let nota = Number(prompt("Informe uma nota entre 0 e 10:"));
    while (true) {
        if (nota < 0 || nota > 10 || Number.isNaN(nota)) {
            console.log("Nota inválida");
            nota = Number(prompt("Informe uma nota entre 0 e 10:"));
        }
        else {
            console.log("Nota aceita: " + nota);
            return nota;
        }
    }
}
// Execute no Console: console.log(solicitarNotaValida());
// Teste 1: 12, -1, 8. Resultado: dois erros e nota aceita 8.
// Teste 2: 0. Resultado: nota aceita 0.
// Teste 3: 10. Resultado: nota aceita 10.
