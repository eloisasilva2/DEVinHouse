/* 8 - Crie um site com os seguintes requisitos:

um campo de texto (input) onde o usuário irá digitar uma mensagem

três botões:

um botão “adicionar”, que no momento do clique insira a mensagem na tela

um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage e exiba na tela
opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”
 */


function adicionarMensagem() {

    let mensagemDigitada = document.getElementById("mensagemDigitada");
    let valorDigitado = mensagemDigitada.value;

    let mensagem = document.createElement("p");
    mensagem.innerText = valorDigitado;

    let mensagemAdicionada = document.getElementById("mensagemAdicionada");
    mensagemAdicionada.appendChild(mensagem);

}

function salvarMensagem() {

    let mensagem = document.getElementById("mensagemDigitada");
    let valorDigitado = mensagem.value;

    if (valorDigitado == "") {
        alert("Nenhuma mensagem foi adicionada, por favor digite o texto.")
    } else {
        localStorage.setItem("mensagem", valorDigitado)
    }
}


function mostrarMensagem() {

    let mensagemSalva = localStorage.getItem('mensagem');

    if (mensagemSalva == null) {
        alert("Não há ítens salvos.")
    } else {
        let mensagem = document.createElement("p");
        mensagem.innerText = mensagemSalva;

        let mostrarMensagem = document.getElementById("mostrarMensagem");
        mostrarMensagem.appendChild(mensagem);
    }
}





