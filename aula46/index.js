function mostrarHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR',{hour12:false})
}

function funcaoDoInteval(){
    console.log(mostrarHora())
}
setInterval(funcaoDoInteval, 1000)