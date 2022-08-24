// Funções são estruturas de códigos menores que são reaproveitadas durante a execulção/construção de um programa;
// Principal objetivo: poupar repetição de código;
// Podem ser consideradas 'subpropagramas;

/* definindo uma função
  Uma função tem uma estrutura um pouco mais complexa;
  Devemos declarar a função sempres com a palavra function;
  Uma função deve ter um nome;
  Pode conter argumentos/paramentros, definidos entre();
  O corpo da função é definido entre {}
  Geralmente uma função retorna um valor;
  É possivel declarar funções em variaveis;
*/

function escreverNoconsole(){
  console.log("Escrevendo no console.log()!")
}

escreverNoconsole();

const textoNoConsole = function(){
  console.log("Texto no console!");
}

textoNoConsole();
const textPorParamento = function(texto){
  console.log(texto);
}