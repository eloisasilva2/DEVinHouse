//Crie uma arrow function que recebe um array de números e calcula a média deles

let calcularMedia = (array) => {
    let media =
      array.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0) / array.length;
    return media;  
  };
  
  console.log(calcularMedia([10, 2, 2, 2]));
//!!!! estudar reduce

  