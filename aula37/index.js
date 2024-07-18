function random(min, max){
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

const max = 50
const min = 1

let rand = random(min, max);

while (rand !== 10){
let rand = random(min, max); // chama a função dnv pra repetir os num
  console.log(rand)
}
