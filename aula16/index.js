let numeroEscolhido = Number(window.prompt('Escolha um número'))

const titulo = document.getElementById('titulo')
const container = document.getElementById('numeros-container')

titulo.innerText = `Seu número é: ${numeroEscolhido.toFixed(0)}`
container.innerHTML += `<p> Sua raiz é: ${numeroEscolhido ** 0.5}<p>`
container.innerHTML += `<p> Seu numero é intero ? ${Number.isInteger(numeroEscolhido)}</p>`
container.innerHTML += `<p> O seu não é um numero ? ${Number.isNaN(numeroEscolhido)}</p>`
container.innerHTML += `<p>Seu numero arredondado para baixo é: ${Math.floor(numeroEscolhido.toFixed(0))}</p>`
container.innerHTML += `<p>Seu numero arredondado para cima é: ${Math.ceil(numeroEscolhido.toFixed(0))}</p>`
container.innerHTML += `<p>Seu numero com duas casas decimais é: ${numeroEscolhido.toFixed(2)}</p>`



