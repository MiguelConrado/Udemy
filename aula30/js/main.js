function data(){
const agora = new Date()
const monthDay = agora.getDate()
const year = agora.getFullYear()

const second = agora.getSeconds()
const minutes = agora.getMinutes()
const hours = agora.getHours()

function getTextDay(day){
    const diaNome = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado']
    return diaNome[day]
}
let dayWeekText = getTextDay(agora.getDay()) //TEXTO DOS DIAS DA SEMANA


// NOME DO MES
function getMonthName(monthNumber){
    const meses = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return meses[monthNumber]
}
let monthName = getMonthName(agora.getMonth()) //TEXTO DOS MESES



// RELOGIO
function initializeClock(num){
    return num < 10 ? '0'+num : num
}



let p = document.getElementById('p')
p.innerText = ` ${dayWeekText}, ${monthDay}, ${monthName} ${year}, ${initializeClock(hours)}:${initializeClock(minutes)}:${initializeClock(second)}`
}

setInterval(data,1000)

