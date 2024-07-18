const pessoa = {
    nome: 'luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'R. do Joazinho',
        numero: 304
    }
}
const {endereco: {rua}} = pessoa
console.log(rua)
