function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);    
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'GMT'
    })
}

const relogio = document.querySelector('#timer')
const comecarTimer = document.querySelector('.comecar')
const pausarTimer = document.querySelector('.pausar')
const reinciarTimer = document.querySelector('.reiniciar')
const terminarTimer = document.querySelector('.terminar')
let segundos = 0
let timer;

function intervaloDeUmSegundo(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criarHoraDosSegundos(segundos)
},1000)}

document.addEventListener('click', function(e){
    const elementoClicado = e.target;

    if(elementoClicado.classList.contains('comecar')){
        clearInterval(timer)
        intervaloDeUmSegundo()
        relogio.style.color = 'black'
    }

    if(elementoClicado.classList.contains('pausar')){
        setTimeout(function(){
            clearInterval(timer)
            relogio.style.color = 'red'
        },1)
    }

    if(elementoClicado.classList.contains('reiniciar')){
        segundos = 0
        relogio.style.color = 'black'
        clearInterval(timer)
        intervaloDeUmSegundo()
    }

    if(elementoClicado.classList.contains('terminar')){
        segundos = 0
        relogio.innerHTML = criarHoraDosSegundos(segundos)
        relogio.style.color = 'black'

        setTimeout(function(){
            clearInterval(timer)
        },1)
    }
})

