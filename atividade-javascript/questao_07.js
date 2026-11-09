function classificarTemperatura(temperatura) {
    if (temperatura < 20) {
        return "Frio";
    }
    else if (temperatura <= 30) {
        return "Agradável";
    }
    else {
        return "Quente";
    }
}
console.log(classificarTemperatura(19));
console.log(classificarTemperatura(20));
console.log(classificarTemperatura(30));
console.log(classificarTemperatura(31));
