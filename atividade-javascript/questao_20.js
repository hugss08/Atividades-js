function simularCrescimento(rodadas) {
    let quantidade = 1;
    for (let rodada = 1; rodada <= rodadas; rodada++) {
        quantidade *= 2;
        console.log("Rodada " + rodada + ": " + quantidade);
    }
}
simularCrescimento(3);
simularCrescimento(1);
simularCrescimento(0);
