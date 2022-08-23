//Faça uma estrutura if/else para verificar se um usuário pode dirigir;

// Armazene em variaveis algumas informações sobre o usuário: idade, se tem CNH
// Se a idade for maior que 18 anos possuir CNH, exiba uma mensagem

//tiver 18 nem CNH, exiba outra mensagem;

let idade = 17;
let cNh = true;

if(idade >= 18 && cNh == true){
  console.log("Sim, pode dirigir")
}else if(idade <= 18 && cNh == false){
  console.log("Não pode dirigir, vias de tirar a CNH")
}else{
  console.log("Não pode dirigir")
}

