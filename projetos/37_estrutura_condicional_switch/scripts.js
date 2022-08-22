/* Estrutura de condicional:switch
 * Quando há a necessidade de vários ifs, podemos utilizar o switch/case
 * Para sair de um case podemos utilizar o break
 * Podemos inserir uma expresssão default, para caso nenhum valor for correspondido
*/

let nome = "Benicio"
switch (nome){
  case "Benicio":
    console.log("O seu nome é Benicio")
    break
  case "Bento":
    console.log("O seu nome é Marcos")
    break
  default:
    console.log("O não foi encontrado!");
    break
}

// if(nome == "Benicio"){
//   console.log("O seu nome é Benicio")
// }else{
//   console.log("O não foi encontrado!")
// }