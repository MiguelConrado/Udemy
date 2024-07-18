// FOR in
const pessoas  = {
  nome: 'Miguel', 
  sobreNome: 'Conrado',
  idade: 16,
  altura: 55,

}

for ( let indice in pessoas){
  console.log(indice,':',pessoas[indice])
}
console.log('---------FOROF---------')

const nome  = [
  {nome: 'Miguel', sobreNome: 'Conrado'},
  {nome: 'Thales', sobreNome: 'Conrado'},
  {nome: 'Juan', sobreNome: 'Conrado'}
]
for (let i of nome){
  const {nome, sobreNome} = i
  console.log(nome,sobreNome)
}

console.log('---------FOREACH---------')

nome.forEach(function(valor,indice){
  console.log(valor)
})


// for ( let i = 0; i < frutas.length; i++){
//   console.log(frutas[i])
// }
