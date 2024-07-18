const pessoa1 = {
    nome:'luiz',
    sobrenome:'conrado',
    idade:25,

    fala(){
        console.log(`A minha idade atual é ${this.idade} e ano que vem eu faço ${this.idade + 1}`)
    },
    incrementaIdade(){
        this.idade++
    }
};
pessoa1.incrementaIdade()
pessoa1.fala()


// function criaPessoa(nome,sobrenome,idade){
//     return{
//         nome:nome,
//         sobrenome:sobrenome,
//         idade:idade
//     }
// }
// const pessoa1 = criaPessoa('Luiz', 'otavio', 25)
// const pessoa2 = criaPessoa('joao', 'vitror', 20)
// const pessoa3 = criaPessoa('miguel', 'conrado', 35)
// const pessoa4 = criaPessoa('maria', 'clara', 24)
// const pessoa5 = criaPessoa('lucas', 'gabriel', 35)

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)
// console.log(pessoa3.nome)



// const pessoa1 = {
//     nome:'luiz',
//     sobrenome: 'miranda',
//     idade: '15'
// }

// const pessoa2 = {
//     nome:'maria',
//     sobrenome: 'conrado',
//     idade: '16'
// }

// console.log(pessoa1.nome)