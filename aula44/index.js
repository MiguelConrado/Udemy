function somar(x,y){
    if (typeof x != "number" || typeof y != "number"){
        throw('x e y precisam ser numeros')
    } 
    return x+ y
}

try{
    console.log(somar(2,1))
    console.log(somar('2',1))
}catch(error){
    console.log(error)
}
