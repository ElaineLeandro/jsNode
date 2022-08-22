// for(let i= 5; i < 20; i= i+1) {
//   if(i % 10 == 0){
//     console.log('Saiu do loop');
//     break
//   }
//   console.log('Proseguindo o loop')
// }

let nome = "Elaine"

for (let i= 0; i < 10; i=i + 1) {

  if(i == 3){
    nome ="Benicio"
  }

  if( i == 5 && nome == "Benicio"){
    console.log("O nome é Benicio, pode parar");
    break
  }
  console.log(i)
}