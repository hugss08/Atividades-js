function calcular(numero1, numero2, operacao) {
    if (operacao === "+") {
        return numero1 + numero2;
    }
    else if (operacao === "-") {
        return numero1 - numero2;
    }
    else if (operacao === "*") {
        return numero1 * numero2;
    }
    else if (operacao === "/") {
        if (numero2 === 0) {
            return "Não é possível dividir por zero";
        }
        return numero1 / numero2;
    }
    else {
        return "Operação inválida";
    }
}
console.log(calcular(10, 5, "+"));
console.log(calcular(10, 5, "-"));
console.log(calcular(10, 5, "*"));
console.log(calcular(10, 5, "/"));
console.log(calcular(10, 0, "/"));
console.log(calcular(10, 5, "%"));
