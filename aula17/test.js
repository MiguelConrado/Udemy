// ARROW FUNCTION-------------
const passouAno = (nota,conceito) =>{
    if(nota + conceito <= 14){
        return 'Q BURRU'
    }else{
        return 'boa mané'
    }
}
console.log(passouAno(10,4))

const raiz = n => n** 0.5
console.log(raiz(9))

// FUNCTIONS N2-------------

// const raiz = function (x){
//     return x ** 0.5
// };
// raiz(9)
// console.log(raiz(9))


//FunctionN1----------------

// function soma(x,y){
//     const resultado = x + y
//     return resultado
// }
// const resultado = soma(2,2) // o resultado volta pra dentro do soma
// console.log(resultado)
 

// function saudacao(nome){
//     return `olá ${nome}`;
// }

// const variavel = saudacao('luiz');
// console.log(variavel);

// function passouAno(prova,conceito){
//     if(prova + conceito >= 15){
//         return `Somando tudo tu passou menó`
//     }else{
//         return `IHHH BURRÃO MANÉ`
//     }
// }
// const variavel = passouAno(10,5)
// console.log(variavel)