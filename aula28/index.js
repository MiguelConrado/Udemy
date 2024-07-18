function zeroAEsquerda(num){
    return (num < 10) ? `0${num}` : num
}


function formataData(data){
    let ano = zeroAEsquerda(data.getFullYear());
    let mes = zeroAEsquerda(data.getMonth() + 1 );
    let dia = zeroAEsquerda(data.getDate());
    let hora = zeroAEsquerda(data.getHours());
    let minutos = zeroAEsquerda(data.getMinutes());
    let segundos = zeroAEsquerda(data.getSeconds());

    return `${hora}:${minutos}:${segundos} -> ${dia}/${mes}/${ano}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)



// const agora = new Date(1719253241750);

// let dia = agora.getDay()
// let hora = agora.getHours()
// let minutos = agora.getMinutes()
// let segundos = agora.getSeconds() 

// console.log(agora.toString())
// console.log(Date.now())


// segundos = (segundos < 10) ? `0${segundos}` : segundos
// minutos = (minutos < 10) ? `0${minutos}` : minutos
// const relogio = `${hora} : ${minutos} : ${segundos}`

// console.log(hora + ':' + minutos + ':' +  segundos) 