//5 - Substitua as repetições do exercício anterior por uma função.


var numeros = [];
let pares = [];
let impares = [];
function quantidadeParImpar(numeros) {
    
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
            console.log(pares);
        } else {
            impares.push(numeros[i]);
        }
    }

}

//exemplo de array
numeros = [1, 2, 4, 9, 12, 15, 16, 25, 30, 31, 38, 40, 45];
quantidadeParImpar(numeros);

document.write("<h3> A quantidade informada foi " + numeros.length + ", a de valores pares foi " + pares.length + ", e a de valores ímpares foi " + impares.length + ".</h3>");




