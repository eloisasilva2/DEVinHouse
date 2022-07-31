//Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda

let calcularMedia = (array) => {
    let media =
      array.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) / array.length;
    return media;  
  };
  
  console.log(calcularMedia([10, 2, 2, 2]));
