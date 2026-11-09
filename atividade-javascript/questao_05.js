function classificarNota(nota) {
    if (nota >= 7 && nota <=10) {
        return "Aprovado";
    }
    else if (nota >= 5 && nota <7) {
        return "Recuperação";
    }
    else if (nota >=0 && nota <5) {
        return "Revisão necessária" ;
    }
    else {
        return "Nota inválida"
    }
}
console.log(classificarNota(8));
console.log(classificarNota(6));
console.log(classificarNota(3));
console.log(classificarNota(-1));
console.log(classificarNota(11));