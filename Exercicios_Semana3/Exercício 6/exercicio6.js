//6 - Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
//um campo de input do item um botão para criar um item na lista


function listaBrinquedos() {

let brinquedoDigitado = document.getElementById("brinquedoDigitado");
let valorDigitado = brinquedoDigitado.value;

let brinquedo = document.createElement("li");
brinquedo.innerText = valorDigitado;

let listaBrinquedos = document.getElementById("listaBrinquedos");
listaBrinquedos.appendChild(brinquedo);

}





