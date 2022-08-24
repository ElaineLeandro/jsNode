//Mais sobre funções

const soma = function(a, b){
  return a + b
}

console.log(soma(3,5))

const saudacao = function(nome){
  if(nome == "Mateus"){
    return "Olá Mateus"
  }
}

console.log(saudacao("Mateus"))

function multiplicarTresNumeros(x,y,z){
  return x * y * z ;
}
 console.log(multiplicarTresNumeros(2,3,4))

const mult = multiplicarTresNumeros(5,4,8) 

console.log("O valor de mult é" + mult);

function podeDirigir(idade,habilitacao){
  if(idade >= 18 && habilitacao == true){
        console.log("Pode dirigir")
  }else{
    console.log("Não pode dirigir!")
  }
}

console.log(podeDirigir(19,true))
console.log(podeDirigir(25,true))
console.log(podeDirigir(44,0))
console.log(podeDirigir(19,1))
console.log(podeDirigir(17, false))