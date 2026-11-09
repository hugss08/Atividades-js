function verificarCodigoDeAcesso() {
    const codigoCorreto = "javascript123";
    let acessoPermitido = false;
    for (let tentativa = 1; tentativa <= 3; tentativa++) {
        const codigo = prompt("Informe o código de acesso:");
        if (codigo === codigoCorreto) {
            console.log("Acesso permitido");
            acessoPermitido = true;
            break;
        }
        else {
            console.log("Tentativas restantes: " + (3 - tentativa));
        }
    }
    if (acessoPermitido === false) {
        console.log("Acesso bloqueado");
    }
}
// Execute no Console: verificarCodigoDeAcesso();
// Teste 1: javascript123. Resultado: acesso permitido na primeira tentativa.
// Teste 2: errado, outro, javascript123. Resultado: acesso permitido na terceira tentativa.
// Teste 3: errado, outro, teste. Resultado: acesso bloqueado após três tentativas.
