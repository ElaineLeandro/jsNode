/* Estrutura de condicional:else if
 * Ainda podemos encadear mais condições com o else if
 * Ou seja, antes de executar um else, ou até mesmo sem ele podemos verificar mais uma condição
*/

// let a = 5;
// let b = 3;

// if(a + b ) {
//   console.log('O resultado é 3');
// }else if(a == 4){
//   console.log('O valor de a é 4')
// }else if(b == 3){
//   console.log('O valor de b é 3')
// }else{
//   console.log('Nenhum das condições acima!')
// }

let nome = "Leandro"
let idade = 37

if(nome != undefined && nome == 'Rodrigues'){
  console.log("Nome está definido")
}else if(nome == "Leandro" && nome.length > 5  && idade == 50){
  console.log("Nome é Leandro")
}else{
  console.log('Não é Leandro')
}

if( 2 > 4){
  console.log("Teste1")
}else if( 2 == 2){
  console.log("Teste2");
}