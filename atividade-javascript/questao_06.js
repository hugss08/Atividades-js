function calcularCompra(valorCompra) {
    if (valorCompra >= 200) {
        let desconto = valorCompra * 0.10;
        let valorFinal = valorCompra - desconto;
        return valorFinal;
    }
    else if (valorCompra >= 0 && valorCompra < 200){
        return valorCompra;
    }
    else if (valorCompra < 0) {
        return "Valor invalido";
    }

}
console.log(calcularCompra(150));
console.log(calcularCompra(200));
console.log(calcularCompra(250));
console.log(calcularCompra(-10));