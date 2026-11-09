function compararNumeros(numero1, numero2) {
    if (numero1 > numero2){
        return "Numero 1 e maior";
    }
    else if (numero2 > numero1){
        return "Numero 2 e maior";
    }
    else {
        return "Os numeros são iguais";
    }
}
console.log(compararNumeros(9,4));
console.log(compararNumeros(4,9));
console.log(compararNumeros(5,5));3