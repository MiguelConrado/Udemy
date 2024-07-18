const data = new Date();

function getWeekDays(joaozinho){
    if(joaozinho === 0) return'Domingo'
    if(joaozinho === 1) return'Segunda'
    if(joaozinho === 2) return'Terça'
    if(joaozinho === 3) return'Quarta'
    if(joaozinho === 4) return'Quinta'
    if(joaozinho === 5) return'Sexta'
    if(joaozinho > 6) return ''
}

const diaSemana = data.getDay()
const diaSemanaTexto = getWeekDays(diaSemana)

console.log(diaSemana,diaSemanaTexto)
