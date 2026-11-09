function somarAte(limite) {
    let soma = 0;
    let numero = 1;
    while (numero <= limite) {
        soma += numero;
        numero++;
    }
    return soma;
}
console.log(somarAte(5));
console.log(somarAte(1));
console.log(somarAte(10));
