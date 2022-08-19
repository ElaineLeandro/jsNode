/* Estrutura de condicional:if
 * O programa vai execultar um bloco de código, Se algo acontecer
 * Onde algo é a condição imposta por statement;
 * Que resulta em um boolean (true or false)
 * 
 * let idade = 19;
  if(idade > 18){
  console.log('Pode entrar')
}
*/

let idade = 19;
if(idade == 19){
  console.log('A idade é = 19')
}

if(idade > 25){
  console.log('A idade é maior que 25')
}

let nome = 'Asli'
if(nome == "Asli"  && idade > 10){
  console.log("Liderado!")
}

let passaporte = true
if((nome == "Asli" && idade > 30) || passaporte == true){
  console.log('Liberado para viajar!')
}