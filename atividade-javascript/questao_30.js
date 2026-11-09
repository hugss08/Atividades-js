function registrarCompra() {
    let quantidade = 0;
    let subtotal = 0;
    while (true) {
        const valor = Number(prompt("Informe o valor do produto (0 para encerrar):"));
        if (valor === 0) {
            break;
        }
        else if (valor < 0) {
            console.log("Valor negativo não permitido");
        }
        else if (valor > 0) {
            subtotal += valor;
            quantidade++;
        }
    }
    if (quantidade === 0) {
        console.log("Nenhum produto registrado");
    }
    else {
        let desconto = 0;
        if (subtotal >= 100) {
            desconto = subtotal * 0.10;
        }
        const total = subtotal - desconto;
        console.log("Quantidade de produtos válidos: " + quantidade);
        console.log("Subtotal: R$ " + subtotal.toFixed(2));
        console.log("Desconto: R$ " + desconto.toFixed(2));
        console.log("Total final: R$ " + total.toFixed(2));
    }
}
// Execute no Console: registrarCompra();
// Teste 1: 60, -5, 40, 0. Resultado: 2 produtos, subtotal 100, desconto 10 e total 90.
// Teste 2: -3, 0. Resultado: Nenhum produto registrado.
// Teste 3: 20, 30, 0. Resultado: 2 produtos, subtotal 50, desconto 0 e total 50.
