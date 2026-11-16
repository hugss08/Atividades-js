"use strict";

// Elementos da página. Use estas variáveis nas cinco funções.
const modoTela = document.querySelector("#modo-tela");
const nomeReserva = document.querySelector("#nome-reserva");
const dicaReserva = document.querySelector("#dica-reserva");
const precoCalculo = document.querySelector("#preco-calculo");
const descontoCalculo = document.querySelector("#desconto-calculo");
const resultadoCalculo = document.querySelector("#resultado-calculo");
const campoBusca = document.querySelector("#busca-produtos");
const resultadosBusca = document.querySelector("#resultados-busca");
const formCadastro = document.querySelector("#form-cadastro");
const nomeCadastro = document.querySelector("#nome-cadastro");
const precoCadastro = document.querySelector("#preco-cadastro");
const retornoCadastro = document.querySelector("#retorno-cadastro");
const listaCadastro = document.querySelector("#lista-cadastro");

const produtosBusca = [
  { nome: "Caderno" },
  { nome: "Caneta azul" },
  { nome: "Mochila" },
  { nome: "Estojo" }
];

const cadastrados = [];

// Complete apenas estas funções.

function atualizarModoTela() {
  // TODO 1: mostre o modo de tela conforme a largura da janela.
  const largura = window.innerWidth;

  if (largura < 768) {
    modoTela.textContent = "Tela compacta";
  } else {
    modoTela.textContent = "Tela ampla";
  }
}

function alternarDica(evento) {
  // TODO 2: mostre a dica no focus e esconda no blur.
  if (evento.type === "focus") {
    dicaReserva.classList.remove("oculto");
  } else if (evento.type === "blur") {
    dicaReserva.classList.add("oculto");
  }
}

function mostrarPrecoFinal() {
  // TODO 3: leia os campos e mostre o preço depois do desconto.
  const preco = Number(precoCalculo.value);
  const desconto = Number(descontoCalculo.value);

  const valorDesconto = preco * desconto / 100;
  const precoFinal = preco - valorDesconto;

  resultadoCalculo.textContent = "Preço final: " + formatarMoeda(precoFinal);
}

function buscarProdutos(evento) {
  // TODO 4: ao pressionar Enter, filtre por parte do nome e mostre os resultados.
  if (evento.key === "Enter") {
    const busca = campoBusca.value.trim().toLowerCase();

    const encontrados = produtosBusca.filter(function (produto) {
      return produto.nome.toLowerCase().includes(busca);
    });

    mostrarResultados(encontrados);
  }
}

function cadastrarProduto(evento) {
  evento.preventDefault();
  // TODO 5: valide o nome e o preço, cadastre o item e atualize a lista.
  const nome = nomeCadastro.value.trim();
  const precoTexto = precoCadastro.value.trim();
  const preco = Number(precoTexto);

  const nomeValido = nome.length >= 2;
  const precoValido = precoTexto !== "" && !isNaN(preco) && preco >= 0;

  if (!nomeValido || !precoValido) {
    retornoCadastro.textContent = "Confira o nome e o preço.";
    return;
  }

  cadastrados.push({ nome, preco });
  mostrarCadastro();

  retornoCadastro.textContent = "";
  nomeCadastro.value = "";
  precoCadastro.value = "";
}

// Funções auxiliares prontas.

const moedaBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

function formatarMoeda(valor) {
  return moedaBRL.format(valor);
}

function mostrarResultados(itens) {
  resultadosBusca.textContent = "";

  if (itens.length === 0) {
    const aviso = document.createElement("li");
    aviso.textContent = "Nenhum produto encontrado.";
    resultadosBusca.append(aviso);
    return;
  }

  for (const produto of itens) {
    const linha = document.createElement("li");
    linha.textContent = produto.nome;
    resultadosBusca.append(linha);
  }
}

function mostrarCadastro() {
  listaCadastro.textContent = "";

  if (cadastrados.length === 0) {
    const aviso = document.createElement("li");
    aviso.textContent = "Nenhum produto cadastrado.";
    listaCadastro.append(aviso);
    return;
  }

  for (const produto of cadastrados) {
    const linha = document.createElement("li");
    linha.textContent = produto.nome + " — " + formatarMoeda(produto.preco);
    listaCadastro.append(linha);
  }
}

// Eventos e estado inicial já configurados.
document.addEventListener("DOMContentLoaded", atualizarModoTela);
window.addEventListener("resize", atualizarModoTela);
nomeReserva.addEventListener("focus", alternarDica);
nomeReserva.addEventListener("blur", alternarDica);
document.querySelector("#calcular").addEventListener("click", mostrarPrecoFinal);
campoBusca.addEventListener("keydown", buscarProdutos);
formCadastro.addEventListener("submit", cadastrarProduto);

mostrarResultados(produtosBusca);
mostrarCadastro();