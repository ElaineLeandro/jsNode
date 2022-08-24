/* Escopo de uma função
  -> Atualmente com let e const, qualquer bloco de código pode separar seu escopo(um if por exemplo);
  ->  Isso é muito bom pois separa os contextos, com var isso não pode acontecia.
  -> ou seja , podemos ter escopo diferentes não só com funções;
* */

let e = 10

const numero = function(){
  let e = 25;
  console.log(e)
}

numero()
console.log(e)