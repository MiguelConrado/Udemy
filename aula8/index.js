let now = new Date()
let ano = now.getFullYear()

const nome = 'Miguel'
const sobreNome = 'Conrado'
const idade = 16
const peso = 58
const altura = 1.73
const nascimento = ano - idade

let imc;
imc =  peso / (altura * altura)
 
console.log(`${nome} ${sobreNome} tem  ${idade} anos pesa ${peso} KG tem ${altura} de ${altura} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${nascimento}`)


