function verificarMeta(nota, frequencia) {
    if (nota >= 7 && frequencia >= 75) {
        return "Meta atendida";
    }
    else {
        return "Meta não atendida";
    }
}
console.log(verificarMeta(8, 80));
console.log(verificarMeta(8, 60));
console.log(verificarMeta(6, 90));
console.log(verificarMeta(7, 75));
