// const agora = new Date()
let hora =NaN //agora.getHours()

if(hora <= 12 && hora >= 0){
    console.log('Bom dia') 

}else if(hora >= 12 && hora <= 17){
    console.log('boa tarde')

}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite')

}else{
    console.log('[ERRO]')
}