const campoPreco = document.getElementById("preco-calc");
const campoDesconto = document.getElementById("desconto-calc");
const botaoCalcular = document.getElementById("calcular");
const saida = document.getElementById("saida-calc");

botaoCalcular.addEventListener("click", function () {
  // TODO 1: Ao clicar em Calcular, leia o preço e o desconto informados.
  // Se algum campo estiver vazio ou contiver apenas espaços,
  // mostre um aviso e interrompa o cálculo.
  const textoPreco = campoPreco.value;
  const textoDesconto = campoDesconto.value;

  if (textoPreco.trim() === "" || textoDesconto.trim() === "") {
    saida.textContent = "Aviso: preencha o preço e o desconto.";
    return;
  }

  // TODO 2: Converta os valores informados em números.
  // Se algum valor não for um número finito, mostre uma mensagem
  // de erro e interrompa o cálculo.
  const preco = Number(textoPreco);
  const desconto = Number(textoDesconto);

  if (!Number.isFinite(preco) || !Number.isFinite(desconto)) {
    saida.textContent = "Erro: digite apenas números válidos.";
    return;
  }

  // TODO 3: Valide os limites do preço e do desconto.
  // O preço deve ser maior ou igual a zero.
  // O desconto deve estar entre 0% e 100%, inclusive.
  // Se algum valor for inválido, informe o que precisa ser corrigido
  // e interrompa o cálculo.
  if (preco < 0) {
    saida.textContent = "Corrija o preço: ele deve ser maior ou igual a zero.";
    return;
  }

  if (desconto < 0 || desconto > 100) {
    saida.textContent = "Corrija o desconto: ele deve estar entre 0% e 100%.";
    return;
  }

  // TODO 4: Use uma função para calcular o preço final com desconto.
  // Mostre o resultado na página em reais, com duas casas decimais.
  const precoFinal = calcularPrecoFinal(preco, desconto);
  saida.textContent = "Preço final: " + formatarMoeda(precoFinal);
});
