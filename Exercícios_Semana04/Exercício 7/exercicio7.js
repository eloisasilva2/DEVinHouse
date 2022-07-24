/* Crie um código javascript para verificar se todos os alunos do array de objetos arrayAlunos abaixo estão acima da média que será 7.
Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação".

let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
] */


let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
];

let alunosRecuperacao = arrayAlunos.filter(function (item) {
    return item.media < 7;
})

if(alunosRecuperacao == ""){
    document.write("Parabéns a todos da turma.")
} else{
    mostrarLista = alunosRecuperacao[i];
    document.write(mostrarLista)
    // mostrarNaTela(alunosRecuperacao);
}


// function  mostrarNaTela(alunosRecuperacao){
//     let listaAlunos = document.getElementById('lista');
//     for (aluno of alunosRecuperacao) {
//         // alunos = alunosRecuperacao[i];
//         let itemAlunos = document.createElement('li');
//         itemAlunos.innerText = alunos;
//         listaAlunos.appendChild(itemAlunos);
    
// }
// }
console.log(alunosRecuperacao);


// function repetirFrases(listaFrases) {
//     var divTexto = document.getElementById("texto");
//     for (frase of listaFrases) {
//       const texto = document.createElement("texto");
//       texto.innerText = frase;
//       divTexto.appendChild(texto);
//     }
//   }
  
//   repetirFrases(frases);