
const enviar = document.getElementById('enviar')
const form = document.getElementById('formulario')

form.addEventListener('submit', function (e){
    e.preventDefault()
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura =  Number(inputAltura.value)

    if(!peso){
        setResultado('Peso Invalido', false)
        return
    }

    if(!altura){
        setResultado('Altura Invalido', false)
        return
    }

    const imc = getImc(peso,altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} ${nivelImc}`
    setResultado(msg, true)
    
});

function getNivelImc(getImc){ 
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'Obesidade nivel 1', 'Obesidade nivel 2', 'Obesidade nivel 3']

    if(getImc >= 39.9)return nivel[5]

    if(getImc >=34.9)return nivel[4]

    if(getImc >=29.9)return nivel[3]

    if(getImc >=24.9)return nivel[2]
    
    if(getImc >=18.5)return nivel[1] 

    if(getImc < 18.5)return nivel[0]
}

function getImc(peso, altura){
    const imc = peso/(altura**2);
    return imc.toFixed(2)
}

function criaP(){
    const p = document.createElement('p')
    return p;
}


function setResultado(msg, isValid){
    const resultado = document.getElementById('resultado')
    
    const p = criaP()
    
    if (isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }


    p.innerHTML = msg
    resultado.appendChild(p)
} 

// if (calculo > 40) {
//     resultado.innerText = `${calculo.toFixed(2)} - Você está com Obesidade nível 3`;
// } else if (calculo > 35 && calculo <= 39.9) {
//     resultado.innerText = `${calculo.toFixed(2)} - Você está com Obesidade nível 2`;
// } else if (calculo > 30 && calculo <= 34.9) {
//     resultado.innerText = `${calculo.toFixed(2)} - Você está com Obesidade nível 1`;
// } else if (calculo > 25 && calculo <= 29.9) {
//     resultado.innerText = `${calculo.toFixed(2)} - Você está com Sobrepeso`;
// } else if (calculo > 18.5 && calculo <= 24.9) {
//     resultado.innerText = `${calculo.toFixed(2)} - Você está no peso normal`;
// } else {
//     resultado.innerText = `${calculo.toFixed(2)} - Você está abaixo do peso`;
// }