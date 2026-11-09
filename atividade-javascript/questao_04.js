function verificarParticipacao(idade) {
    if (idade >= 16) {
        return "Participação permitida";
    }
        else if (idade >= 0 && idade <= 15){
            return "Participação não permitida";
        }
        else {
            return "Idade inválida";
        }
}
console.log(verificarParticipacao(15));
console.log(verificarParticipacao(16));
console.log(verificarParticipacao(-1));