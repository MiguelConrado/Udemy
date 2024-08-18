
const souUmDado = function NomeDaFuncao(){
    console.log('oi')
}
function excutaFuncao(funcao){
    funcao()
}
// excutaFuncao(souUmDado)
 // -------------------  ARROW FUNCTION

 const arrowFunction = () =>{
    console.log('I`m a ARROW FUNCTION BITCH !!!')    
 }
// setInterval(arrowFunction,1000)


//  -------------FUNCAO NO OBJ-----------------

const obj = {
    falarOi(){
        console.log('Oi amigo')
    },
    falarTchau(){
        console.log('Tchau amigo')
    }
}
for(let i in obj){
    obj[i]()
}
