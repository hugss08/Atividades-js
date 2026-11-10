// Calcular o preço final e formatar em reais.
const moedaBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function calcularPrecoFinal(preco, percentual) {
  const valorDesconto = preco * (percentual / 100);
  return preco - valorDesconto;
}

function formatarMoeda(valor) {
  return moedaBRL.format(valor);
}

// TODO 01 — Pegue os elementos do formulário.
// Selecione #form-produto, #nome, #preco, #desconto e #retorno.
// Selecione também #erro-nome, #erro-preco e #erro-desconto.
// Dê nomes diferentes ao campo, à mensagem e ao valor lido.
const formProduto = document.querySelector("#form-produto");
const campoNome = document.querySelector("#nome");
const campoPreco = document.querySelector("#preco");
const campoDesconto = document.querySelector("#desconto");
const retorno = document.querySelector("#retorno");
const erroNome = document.querySelector("#erro-nome");
const erroPreco = document.querySelector("#erro-preco");
const erroDesconto = document.querySelector("#erro-desconto");

// TODO 02 — Valide o nome.
// Leia o nome e retire os espaços das pontas. Exija pelo menos dois caracteres.
// Se estiver inválido, escreva "Digite pelo menos 2 caracteres." em #erro-nome.
// Se estiver válido, apague a mensagem desse campo.
function validarNome() {
  const nome = campoNome.value.trim();

  if (nome.length < 2) {
    erroNome.textContent = "Digite pelo menos 2 caracteres.";
    return false;
  }

  erroNome.textContent = "";
  return true;
}

// TODO 03 — Valide o preço.
// Verifique se o campo foi preenchido antes de converter para número.
// Aceite preço igual ou maior que zero. Se estiver vazio ou inválido,
// mostre "Use um preço a partir de 0." em #erro-preco.
// Se estiver válido, apague a mensagem desse campo.
function validarPreco() {
  const textoPreco = campoPreco.value.trim();

  if (textoPreco === "") {
    erroPreco.textContent = "Use um preço a partir de 0.";
    return false;
  }

  const preco = Number(textoPreco);

  if (!Number.isFinite(preco) || preco < 0) {
    erroPreco.textContent = "Use um preço a partir de 0.";
    return false;
  }

  erroPreco.textContent = "";
  return true;
}

// TODO 04 — Valide o desconto.
// Verifique se o campo foi preenchido antes de converter para número.
// Aceite valores de 0 a 100, incluindo os dois limites. Se estiver vazio
// ou inválido, mostre "Use um desconto de 0 a 100." em #erro-desconto.
// Se estiver válido, apague a mensagem desse campo.
function validarDesconto() {
  const textoDesconto = campoDesconto.value.trim();

  if (textoDesconto === "") {
    erroDesconto.textContent = "Use um desconto de 0 a 100.";
    return false;
  }

  const desconto = Number(textoDesconto);

  if (!Number.isFinite(desconto) || desconto < 0 || desconto > 100) {
    erroDesconto.textContent = "Use um desconto de 0 a 100.";
    return false;
  }

  erroDesconto.textContent = "";
  return true;
}

// TODO 05 — Controle o envio do formulário.
// Reúna as três verificações na função validar. Ela deve responder se
// todos os campos estão válidos.
// Use o evento submit, para funcionar tanto pelo botão quanto pela tecla Enter.
// Impeça que a página recarregue. Valide os três campos antes de decidir.
// Se houver erro, escreva "Corrija os campos sinalizados." em #retorno,
// mantenha o que foi digitado e interrompa o envio sem cadastrar nem editar.
function validar() {
  // Chama as três antes de combinar, para todas as mensagens aparecerem.
  const nomeValido = validarNome();
  const precoValido = validarPreco();
  const descontoValido = validarDesconto();

  return nomeValido && precoValido && descontoValido;
}

formProduto.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!validar()) {
    retorno.textContent = "Corrija os campos sinalizados.";
    return;
  }

  cadastrarProduto();
});

// TODO 06 — Cadastre um produto válido.
// Crie uma lista de produtos inicialmente vazia. O primeiro ID deve ser 1.
// Ao cadastrar, guarde um produto com ID, nome, preço e desconto.
// Guarde preço e desconto como números. Aumente o próximo ID só após um novo cadastro.
// Mostre a tabela atualizada, limpe o formulário e informe em #retorno
// qual produto foi cadastrado. Volte o foco para o campo do nome.
const produtos = [];
let proximoId = 1;

const alternarEditor = document.querySelector("#alternar-editor");
const editor = document.querySelector("#editor");

alternarEditor.addEventListener("click", function () {
  editor.classList.toggle("oculto");

  if (editor.classList.contains("oculto")) {
    alternarEditor.textContent = "Mostrar formulário";
  } else {
    alternarEditor.textContent = "Ocultar formulário";
  }
});

function cadastrarProduto() {
  const produto = {
    id: proximoId,
    nome: campoNome.value.trim(),
    preco: Number(campoPreco.value),
    desconto: Number(campoDesconto.value)
  };

  produtos.push(produto);
  proximoId++;

  montarTabela();
  formProduto.reset();
  retorno.textContent = `Produto "${produto.nome}" cadastrado.`;
  campoNome.focus();
}

// TODO 07 — Monte as linhas da tabela.
// Selecione #linhas-produtos. Antes de montar a tabela, limpe as linhas antigas.
// Percorra a lista e crie uma linha por produto com os métodos de tabela vistos em aula.
// Preencha ID, nome, preço, desconto e preço final. Mostre os preços em reais
// e o desconto com o símbolo %. Calcule o valor do desconto aplicando o
// percentual ao preço original, depois subtraia esse valor do preço.
// Deixe uma célula vazia para Ações. Ela receberá os botões na etapa 11.
const linhasProdutos = document.querySelector("#linhas-produtos");

function montarTabela() {
  linhasProdutos.innerHTML = "";

  for (const produto of produtos) {
    const linha = linhasProdutos.insertRow();

    linha.insertCell().textContent = produto.id;
    linha.insertCell().textContent = produto.nome;
    linha.insertCell().textContent = formatarMoeda(produto.preco);
    linha.insertCell().textContent = `${produto.desconto}%`;
    linha.insertCell().textContent = formatarMoeda(
      calcularPrecoFinal(produto.preco, produto.desconto)
    );
    linha.insertCell(); // Ações
  }

  atualizarContagem();
}

// TODO 08 — Atualize a contagem.
// Em #contagem, escreva "Nenhum produto cadastrado." quando a lista estiver vazia.
// Quando houver produtos, mostre "Produtos cadastrados: " seguido da quantidade.
// Atualize a contagem sempre que montar a tabela.
const contagem = document.querySelector("#contagem");

function atualizarContagem() {
  if (produtos.length === 0) {
    contagem.textContent = "Nenhum produto cadastrado.";
  } else {
    contagem.textContent = "Produtos cadastrados: " + produtos.length;
  }
}
