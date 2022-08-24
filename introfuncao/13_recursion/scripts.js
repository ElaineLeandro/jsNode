/* Recursion
  -> Uma funcionalidade que permite uma função se chamar novamente;
  -> Isso pode ser um problema caso a função se chame muitas vezes;
  */

function recursao(n){
  if(n - 1 < 2){
    console.log("Recursão parou")
  }else if(n % 2 != 0){
    recursao(n - 1)
    console.log("Recursão Impar " + n)
  }else{
    console.log("Numero par " + n);
    recursao(n - 2)
  }
}

recursao(39)
recursao(10)
recursao(55)
