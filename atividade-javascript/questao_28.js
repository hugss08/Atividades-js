function iniciarMenu() {
    let opcao = -1;
    while (opcao !== 0) {
        opcao = Number(prompt(
            "1 — Mostrar mensagem de boas-vindas\n" +
            "2 — Calcular o dobro de um número\n" +
            "0 — Encerrar"
        ));
        if (opcao === 1) {
            console.log("Bem-vindo à oficina de JavaScript");
        }
        else if (opcao === 2) {
            const numero = Number(prompt("Informe um número:"));
            console.log("Dobro: " + numero * 2);
        }
        else if (opcao === 0) {
            console.log("Atendimento encerrado");
        }
        else {
            console.log("Opção inválida");
        }
    }
}
// Execute no Console: iniciarMenu();
// Teste 1: opção 1, opção 0. Resultado: boas-vindas e encerramento.
// Teste 2: opção 2, número 5, opção 0. Resultado: dobro 10 e encerramento.
// Teste 3: opção 9, opção 0. Resultado: opção inválida e encerramento.
