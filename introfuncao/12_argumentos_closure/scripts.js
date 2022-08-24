/* Closure
  -> Uma função que se lembra do ambiente em que ela foi criada
  */

function armazenarSoma(x){
  return y => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5)); // 8
let soma2 = armazenarSoma(5)
console.log(soma2(10)) // 15

function lembraSoma(a){
  return function(b){
      return a + b
  }
}

let soma3 = lembraSoma(2)

console.log(soma3(5)); 

let soma4 = lembraSoma(5);

console.log(soma4(7));

function contador(i){
  let cont = i 

  let somaContador = function(){
    console.log(cont)
    cont++
  }
  return somaContador;
}

let meuContador = contador(5);
meuContador()
meuContador()