/* Escopo aninhado
  -> Por causa da possibilidade de criar um escopo, podemos ter mais niveis de escopo;
* */

let a = 10

const multiplicar = function(x,y){
  let a = x * y
    if(a > 10){
    let a = 0;
    a++

    console.log(a) //scopo if dentro da função
  }
  console.log(a)
}

console.log(a)
multiplicar(3,7)