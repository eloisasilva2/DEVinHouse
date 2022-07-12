
var resposta;
var produto = [''];
var qtd = [0, 0, 0, 0, 0];
var fim = false;

do {
  resposta = window.prompt(
    "Qual produto deseja comprar? Digite o código de uma das opções: (1) Hortifruti / (2) Laticínios / (3) Carnes / (4) Peixes / (5) Aves / (6) Fechar pedido.");

  if (resposta != 1 && resposta != 2 && resposta != 3 && resposta != 4 && resposta != 5 && resposta != 6) {
    window.alert("É possível digitar apenas o código de uma das opções: (1) Hortifruti / (2) Laticínios / (3) Carnes / (4) Peixes / (5) Aves / (6) Fechar pedido");
  } else if (resposta == 1) {
    qtd[0] = parseFloat(window.prompt("Qual a quantidade de Hortifruti deseja?"));
      produto.push("Hortifruti");
  }  else if (resposta == 2){
    qtd[1] = parseFloat(window.prompt("Qual a quantidade de Laticínios deseja?"));
    produto.push("Laticínios");
  }  else if (resposta == 3){
    qtd[2] = parseFloat(window.prompt("Qual a quantidade de Carnes deseja?"));
    produto.push("Carnes");
  } else if (resposta == 4){
    qtd[3] = parseFloat(window.prompt("Qual a quantidade de Peixes deseja?"));
    produto.push("Peixes");
  } else if (resposta == 5){
    qtd[4] = parseFloat(window.prompt("Qual a quantidade de Aves deseja?"));
    produto.push("Aves");
  }

  }


while (resposta != 6) {


      
  }

document.write("<h3> O produto que o cliente mais pediu foi " + produto + "com a seguinte quantidade: " + qtd + "</h3>");
