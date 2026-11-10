/*
  ATIVIDADE PRÁTICA — EVENTOS COM JAVASCRIPT

  Classes de eventos trabalhadas:
  1. Eventos de interface;
  2. Eventos de foco;
  3. Eventos de teclado;
  4. Eventos de formulário.

  Regras:
  1. Faça toda a implementação neste arquivo.
  2. Selecione os elementos com document.querySelector().
  3. Registre os eventos com addEventListener().
  4. Crie funções com nomes que indiquem claramente suas responsabilidades.
  5. Utilize textContent para alterar textos exibidos na página.
  6. Utilize value para ler o conteúdo dos campos.
*/

/*
  ============================================================
  PARTE 1 — EVENTOS DE INTERFACE
  ============================================================
*/

const statusDom = document.querySelector("#statusDom");
const statusLoad = document.querySelector("#statusLoad");
const larguraTela = document.querySelector("#larguraTela");
const modoTela = document.querySelector("#modoTela");
const statusRolagem = document.querySelector("#statusRolagem");
const programacao = document.querySelector("#programacao");

/*
  01. DOMContentLoaded

  Registre o evento DOMContentLoaded em document.

  Quando o evento ocorrer:
  - altere o conteúdo de #statusDom para "DOM pronto";
  - mostre em #larguraTela a largura atual da janela acompanhada de "px";
  - mostre em #modoTela "Tela compacta" quando a largura for menor que
    768 pixels;
  - caso contrário, mostre "Tela ampla".

  Crie uma função separada para atualizar a largura e o modo de visualização,
  pois essa função será reutilizada no evento resize.

  Teste: recarregue a página e observe o painel de interface.
*/

function atualizarLarguraEModoDaTela() {
    const largura = window.innerWidth;

    larguraTela.textContent = largura + "px";

    if (largura < 768) {
        modoTela.textContent = "Tela compacta";
    } else {
        modoTela.textContent = "Tela ampla";
    }
}

function mostrarDomPronto() {
    statusDom.textContent = "DOM pronto";
    atualizarLarguraEModoDaTela();
}

document.addEventListener("DOMContentLoaded", mostrarDomPronto);

/*
  02. load

  Registre o evento load em window.

  Quando a página e seus recursos terminarem de carregar, altere o conteúdo
  de #statusLoad para "Página completamente carregada".

  Teste: recarregue a página e observe a diferença entre os indicadores
  de DOM e de carregamento completo.
*/

function mostrarPaginaCarregada() {
    statusLoad.textContent = "Página completamente carregada";
}

window.addEventListener("load", mostrarPaginaCarregada);

/*
  03. resize

  Registre o evento resize em window.

  Quando a janela mudar de tamanho, chame a mesma função criada na tarefa 01
  para atualizar #larguraTela e #modoTela.

  Teste: aumente e diminua a largura da janela. Verifique especialmente a
  mudança entre valores menores e maiores ou iguais a 768 pixels.
*/

window.addEventListener("resize", atualizarLarguraEModoDaTela);

/*
  04. scroll

  Registre o evento scroll em window.

  Se window.scrollY for maior ou igual a programacao.offsetTop, altere
  #statusRolagem para "Você chegou à programação".

  Caso contrário, mostre "Continue rolando".

  O elemento da programação possui o identificador #programacao.

  Teste: role a página até a programação e depois volte ao início.
*/

function verificarRolagemAteProgramacao() {
    if (window.scrollY >= programacao.offsetTop) {
        statusRolagem.textContent = "Você chegou à programação";
    } else {
        statusRolagem.textContent = "Continue rolando";
    }
}

window.addEventListener("scroll", verificarRolagemAteProgramacao);

/*
  ============================================================
  PARTE 2 — EVENTOS DE FOCO
  ============================================================
*/

const formFoco = document.querySelector("#formFoco");
const nomeFoco = document.querySelector("#nomeFoco");
const ajudaFoco = document.querySelector("#ajudaFoco");
const campoAtual = document.querySelector("#campoAtual");
const ultimoCampo = document.querySelector("#ultimoCampo");

/*
  05. focus

  Registre o evento focus diretamente no campo #nomeFoco.

  Quando o campo receber o foco, altere #ajudaFoco para mostrar:
  "Digite seu nome completo.".

  Teste: acesse o campo nome com o mouse e depois utilizando a tecla Tab.
*/

function mostrarAjudaDoNome() {
    ajudaFoco.textContent = "Digite seu nome completo.";
}

nomeFoco.addEventListener("focus", mostrarAjudaDoNome);

/*
  06. blur

  Registre o evento blur diretamente no campo #nomeFoco.

  Quando o campo perder o foco:
  - leia seu value;
  - utilize trim() para retirar espaços das extremidades;
  - se o resultado estiver vazio, mostre em #ajudaFoco:
    "O campo nome ficou vazio.";
  - caso contrário, mostre:
    "Nome preenchido corretamente.".

  Teste: saia do campo vazio e depois saia com um nome preenchido.
*/

function verificarNomeAoSairDoCampo() {
    const nome = nomeFoco.value.trim();

    if (nome === "") {
        ajudaFoco.textContent = "O campo nome ficou vazio.";
    } else {
        ajudaFoco.textContent = "Nome preenchido corretamente.";
    }
}

nomeFoco.addEventListener("blur", verificarNomeAoSairDoCampo);

/*
  07. focusin

  Registre somente um evento focusin no formulário #formFoco.

  Utilize o parâmetro evento e evento.target.id para descobrir qual campo
  recebeu o foco. Mostre esse identificador em #campoAtual.

  Teste: navegue entre nome, e-mail e curso utilizando a tecla Tab.
*/

function mostrarCampoAtual(evento) {
    campoAtual.textContent = evento.target.id;
}

formFoco.addEventListener("focusin", mostrarCampoAtual);

/*
  08. focusout

  Registre somente um evento focusout no formulário #formFoco.

  Utilize evento.target.id para descobrir qual campo acabou de perder o foco.
  Mostre esse identificador em #ultimoCampo.

  Teste: passe por todos os campos utilizando Tab e Shift + Tab.
*/

function mostrarUltimoCampo(evento) {
    ultimoCampo.textContent = evento.target.id;
}

formFoco.addEventListener("focusout", mostrarUltimoCampo);

/*
  ============================================================
  PARTE 3 — EVENTOS DE TECLADO
  ============================================================
*/

const campoTeclado = document.querySelector("#campoTeclado");
const tipoEventoTeclado = document.querySelector("#tipoEventoTeclado");
const valorTecla = document.querySelector("#valorTecla");
const codigoTecla = document.querySelector("#codigoTecla");
const teclaRepetida = document.querySelector("#teclaRepetida");
const ctrlPressionado = document.querySelector("#ctrlPressionado");
const shiftPressionado = document.querySelector("#shiftPressionado");
const mensagemTeclado = document.querySelector("#mensagemTeclado");

/*
  09. Função para mostrar as propriedades da tecla

  Crie uma função que receba o parâmetro evento e atualize:
  - #tipoEventoTeclado com evento.type;
  - #valorTecla com evento.key;
  - #codigoTecla com evento.code;
  - #teclaRepetida com "Sim" ou "Não", conforme evento.repeat;
  - #ctrlPressionado com "Sim" ou "Não", conforme evento.ctrlKey;
  - #shiftPressionado com "Sim" ou "Não", conforme evento.shiftKey.

  Essa função deve ser reutilizada nas tarefas de keydown e keyup.
*/

function converterParaSimOuNao(valor) {
    if (valor) {
        return "Sim";
    } else {
        return "Não";
    }
}

function mostrarPropriedadesDaTecla(evento) {
    tipoEventoTeclado.textContent = evento.type;
    valorTecla.textContent = evento.key;
    codigoTecla.textContent = evento.code;
    teclaRepetida.textContent = converterParaSimOuNao(evento.repeat);
    ctrlPressionado.textContent = converterParaSimOuNao(evento.ctrlKey);
    shiftPressionado.textContent = converterParaSimOuNao(evento.shiftKey);
}

/*
  10. keydown

  Registre o evento keydown no campo #campoTeclado.

  Quando uma tecla for pressionada:
  - chame a função criada na tarefa 09;
  - se evento.key for igual a "Enter", mostre em #mensagemTeclado:
    "Você pressionou Enter.";
  - se evento.key for igual a "Escape", limpe o value do campo e mostre:
    "O campo foi limpo com Escape.".

  Teste: pressione letras, Enter, Escape, Shift e Ctrl. Mantenha uma letra
  pressionada para observar a propriedade repeat.
*/

function tratarTeclaPressionada(evento) {
    mostrarPropriedadesDaTecla(evento);

    if (evento.key === "Enter") {
        mensagemTeclado.textContent = "Você pressionou Enter.";
    } else if (evento.key === "Escape") {
        campoTeclado.value = "";
        mensagemTeclado.textContent = "O campo foi limpo com Escape.";
    }
}

campoTeclado.addEventListener("keydown", tratarTeclaPressionada);

/*
  11. keyup

  Registre o evento keyup no campo #campoTeclado.

  Quando uma tecla for liberada:
  - chame a função criada na tarefa 09;
  - mostre em #mensagemTeclado:
    "A tecla [valor da tecla] foi liberada.".

  Utilize evento.key para incluir o valor da tecla na mensagem.

  Teste: pressione e solte diferentes teclas, observando a mudança entre
  keydown e keyup no painel.
*/

function tratarTeclaLiberada(evento) {
    mostrarPropriedadesDaTecla(evento);
    mensagemTeclado.textContent = "A tecla " + evento.key + " foi liberada.";
}

campoTeclado.addEventListener("keyup", tratarTeclaLiberada);

/*
  ============================================================
  PARTE 4 — EVENTOS DE FORMULÁRIO
  ============================================================
*/

const formInscricao = document.querySelector("#formInscricao");
const nomeFormulario = document.querySelector("#nomeFormulario");
const emailFormulario = document.querySelector("#emailFormulario");
const erroEmail = document.querySelector("#erroEmail");
const oficinaFormulario = document.querySelector("#oficinaFormulario");
const apresentacaoFormulario = document.querySelector("#apresentacaoFormulario");
const contadorCaracteres = document.querySelector("#contadorCaracteres");
const mensagemFormulario = document.querySelector("#mensagemFormulario");
const previaNome = document.querySelector("#previaNome");
const previaOficina = document.querySelector("#previaOficina");

/*
  12. input

  Implemente duas respostas ao evento input:

  A) No campo #nomeFormulario:
  - leia o value e utilize trim();
  - se estiver vazio, mostre "Não informado" em #previaNome;
  - caso contrário, mostre o nome digitado em #previaNome.

  B) No campo #apresentacaoFormulario:
  - conte os caracteres utilizando value.length;
  - mostre a quantidade em #contadorCaracteres.

  Teste: digite, apague e cole textos nos dois campos.
*/

function atualizarPreviaDoNome() {
    const nome = nomeFormulario.value.trim();

    if (nome === "") {
        previaNome.textContent = "Não informado";
    } else {
        previaNome.textContent = nome;
    }
}

nomeFormulario.addEventListener("input", atualizarPreviaDoNome);

function atualizarContadorDeCaracteres() {
    contadorCaracteres.textContent = apresentacaoFormulario.value.length;
}

apresentacaoFormulario.addEventListener("input", atualizarContadorDeCaracteres);

/*
  13. change

  Registre o evento change no campo #oficinaFormulario.

  Quando uma nova opção for confirmada:
  - se o value estiver vazio, mostre "Não selecionada" em #previaOficina;
  - caso contrário, mostre o value selecionado em #previaOficina.

  Teste: selecione todas as oficinas e depois volte à primeira opção.
*/

function atualizarPreviaDaOficina() {
    const oficina = oficinaFormulario.value;

    if (oficina === "") {
        previaOficina.textContent = "Não selecionada";
    } else {
        previaOficina.textContent = oficina;
    }
}

oficinaFormulario.addEventListener("change", atualizarPreviaDaOficina);

/*
  14. submit e reset

  A) Registre submit no formulário #formInscricao.

  Quando o formulário válido for enviado:
  - receba o parâmetro evento;
  - utilize evento.preventDefault() para impedir o recarregamento;
  - mostre em #mensagemFormulario uma frase contendo o nome e a oficina;
  - aplique a classe "sucesso" à mensagem.

  B) Registre reset no mesmo formulário.

  Quando o formulário for limpo:
  - restaure #previaNome para "Não informado";
  - restaure #previaOficina para "Não selecionada";
  - restaure #contadorCaracteres para "0";
  - mostre "Formulário limpo." em #mensagemFormulario;
  - limpe #erroEmail.

  Não utilize preventDefault() no evento reset, pois o navegador deve limpar
  os campos normalmente.

  Teste: preencha, confirme e depois utilize o botão Limpar.
*/

function confirmarInscricao(evento) {
    evento.preventDefault();

    const nome = nomeFormulario.value.trim();
    const oficina = oficinaFormulario.value;

    mensagemFormulario.textContent =
        "Inscrição confirmada! " + nome + ", você está inscrito(a) na oficina " + oficina + ".";

    mensagemFormulario.classList.add("sucesso");
}

formInscricao.addEventListener("submit", confirmarInscricao);

function restaurarInterfaceDoFormulario() {
    previaNome.textContent = "Não informado";
    previaOficina.textContent = "Não selecionada";
    contadorCaracteres.textContent = "0";
    mensagemFormulario.textContent = "Formulário limpo.";
    erroEmail.textContent = "";
}

formInscricao.addEventListener("reset", restaurarInterfaceDoFormulario);

/*
  15. invalid

  Registre o evento invalid diretamente no campo #emailFormulario.

  Quando o e-mail estiver vazio ou não atender ao formato esperado, mostre
  em #erroEmail: "Informe um endereço de e-mail válido.".

  Aplique a classe "erro" ao elemento #erroEmail.

  Registre também um evento input no mesmo campo para limpar essa mensagem
  quando o usuário voltar a editar o e-mail.

  Não utilize preventDefault() no evento invalid. Preserve a validação e o
  aviso nativo do navegador.

  Teste:
  - tente confirmar o formulário com o e-mail vazio;
  - tente novamente com "aluno@";
  - corrija para um endereço válido e confirme.

  Observe que submit não acontece enquanto algum campo obrigatório estiver
  inválido.
*/

function mostrarErroDoEmail() {
    erroEmail.textContent = "Informe um endereço de e-mail válido.";
    erroEmail.classList.add("erro");
}

emailFormulario.addEventListener("invalid", mostrarErroDoEmail);

function limparErroDoEmail() {
    erroEmail.textContent = "";
}

emailFormulario.addEventListener("input", limparErroDoEmail);

/*
  CHECKLIST DE ENTREGA

  [x] DOMContentLoaded altera o estado do DOM.
  [x] load informa o carregamento completo.
  [x] resize atualiza a largura e o modo de tela.
  [x] scroll identifica a chegada à programação.
  [x] focus e blur respondem no campo nome.
  [x] focusin e focusout identificam os campos do formulário.
  [x] keydown e keyup mostram as propriedades das teclas.
  [x] input atualiza nome e contador em tempo real.
  [x] change atualiza a oficina selecionada.
  [x] submit confirma sem recarregar a página.
  [x] reset restaura a interface.
  [x] invalid informa o problema no e-mail.
  [x] O console do navegador não apresenta erros.
*/
