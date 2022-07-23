//5 - Substitua as repetições do exercício anterior por uma função.


const frases = [ "Frase 1. ",  "Frase 2. ",  "Frase 3. ",  "Frase 4. ",  "Frase 5. "]
function repetirFrases(listaFrases){
    var divTexto = document.getElementById("texto");
    for(frase of listaFrases){
        const texto = document.createElement("texto");
        texto.innerText = frase;
        divTexto.appendChild(texto);
    }

}

repetirFrases(frases);

  /* const textos = ["texto 1", "texto 2", "texto 3", "texto 4", "texto 5"]
  
  function adicionaTextos(listaDeTextos) {
    const divTextos = document.getElementById("textos")
    for (texto of listaDeTextos) {
      const span = document.createElement("span")
      span.innerText = texto
      // se a questão pedisse para adicionar cor pelo JS
      // span.style.color = "blue"
      divTextos.appendChild(span)
    }
  }
  adicionaTextos(textos)

var divTexto = document.getElementById("texto");

var frase1 = document.createElement("texto");
frase1.innerText = "Frase 1. ";
divTexto.appendChild(frase1);

var frase2 = document.createElement("texto");
frase2.innerText = "Frase 2. ";
divTexto.appendChild(frase2);

var frase3 = document.createElement("texto");
frase3.innerText = "Frase 3. ";
divTexto.appendChild(frase3);

var frase4 = document.createElement("texto");
frase4.innerText = "Frase 4. ";
divTexto.appendChild(frase4);

var frase5 = document.createElement("texto");
frase5.innerText = "Frase 5. ";
divTexto.appendChild(frase5);
 */

