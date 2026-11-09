function calcularFatorial(numero) {
    let fatorial = 1;
    for (let contador = 1; contador <= numero; contador++) {
        fatorial *= contador;
    }
    return fatorial;
}
console.log(calcularFatorial(4));
console.log(calcularFatorial(1));
console.log(calcularFatorial(0));
