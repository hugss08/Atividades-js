const moedaBRL = new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL"
});

function calcularPrecoFinal(preco, percentual) {
  return preco - preco * (percentual / 100);
}

function formatarMoeda(valor) {
  return moedaBRL.format(valor);
}
