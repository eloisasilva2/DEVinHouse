//Utilize o if ternário para construir uma função que recebe o número do dias e retorna se pertence a primeira ou a segunda quinzena

let calcularMedia = (array) => {
    let media =
      array.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) / array.length;
    return media;  
  };
  
