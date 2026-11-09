function verificarBeneficio(emprestimos, oficinas) {
    if (emprestimos >= 10 || oficinas >= 3) {
        return "Possui direito ao benefício";
    }
    else {
        return "Não possui direito ao benefício";
    }
}
console.log(verificarBeneficio(5, 1));
console.log(verificarBeneficio(10, 1));
console.log(verificarBeneficio(5, 3));
console.log(verificarBeneficio(10, 3));
