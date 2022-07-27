/* Crie uma classe chamada Serie com os seguintes atributos: nome, anoLancamento, qttTemporada.

Construa o construtor dessa classe com todos os atributos.
Após isso, com um laço de repetição a sua escolha, instancie a classe 4 vezes com os dados sendo capturados por um prompt e depois adicione a classe a um array chamado series.
Após isso imprima no documento (usando o innerHTML) a série mais antiga (ou seja, a que possui o menor anoLancamento).
Para percorrer o array com as 4 classes utilize o forEach. */



class Serie {
  nome;
  anoLancamento;
  qttTemporada;

  constructor(nome, anoLancamento, qttTemporada) {
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.qttTemporada = qttTemporada;
  }
}

let serieMaisAntiga, anoSerieMaisAntiga
contador = 0;
while (contador < 4) {
  let nome = window.prompt("Digite o nome da série:");
  let anoLancamento = parseInt(window.prompt("Qual o ano de lançamento?"));
  let qttTemporada = parseInt(window.prompt("Qual o quantidade de temporadas?"));

  let series = new Serie(nome, anoLancamento, qttTemporada);

  contador++;
  serieMaisAntiga = series.anoLancamento.sort(function (a, b) {
    return a - b;
  });
  console.log(series);

  // if (contador == 0) { // Na primeira rodada o valor do primeiro lançamento é inserido
  //   anoSerieMaisAntiga = series.anoLancamento;
  //   serieMaisAntiga = series.nome;
  // } else if (series.anoLancamento < anoSerieMaisAntiga) {
  //   anoSerieMaisAntiga = series.anoLancamento;
  //   serieMaisAntiga = series.nome;
  // }
}
let tagH1 = document.getElementById("h1");

tagH1.innerHTML += serieMaisAntiga;
console.log(serieMaisAntiga)


// let min = Math.min(...series.anoLancamento);
// console.log(min);

// serieMaisAntiga.forEach(function (serie) {
//   document.write("<li>Série mais antiga: " + serie.nome + " - Ano de Lançamento: " + serie.anoLancamento + "</li>");
// });




/* cidadesGrandes = series.filter(function (dado) {

  return dado.populacao > 200000;


  let alunosRecuperacao = arrayAlunos.filter(function (item) {
    return item.media < 7;
})

if (alunosRecuperacao == "") {
    document.write("<h4>Parabéns a todos da turma.</h4>")
} else {
    document.write("<h4>Alunos que ficaram de recuperação:</h4>")
    alunosRecuperacao.forEach(function (aluno) {
        document.write("<li>Nome: " + aluno.nome + " - Média: " + aluno.media + "</li>");
    });
} */