function analisarMultiplosDeTres(limite) {
    let quantidade = 0;
    let soma = 0;
    for (let numero = 1; numero <= limite; numero++) {
        if (numero % 3 === 0) {
            console.log(numero);
            quantidade++;
            soma += numero;
        }
    }
    console.log("Quantidade: " + quantidade);
    console.log("Soma: " + soma);
}
analisarMultiplosDeTres(10);
analisarMultiplosDeTres(3);
analisarMultiplosDeTres(2);
