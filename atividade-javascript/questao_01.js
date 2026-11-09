function classificarNumero(numero) {

    if (numero > 0) {
        return "Positivo";
    }
    else if (numero === 0) {
        return "Zero";
    }
    else{
        return "Negativo";
    }

}
console.log(classificarNumero(8));
console.log(classificarNumero(-3));
console.log(classificarNumero(0));
