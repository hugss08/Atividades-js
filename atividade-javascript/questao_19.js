function repetirMensagem(mensagem, quantidade) {
    for (let contador = 1; contador <= quantidade; contador++) {
        console.log(contador + " — " + mensagem);
    }
}
repetirMensagem("Estudando JavaScript", 3);
repetirMensagem("Praticando lógica", 1);
repetirMensagem("Sem repetições", 0);
