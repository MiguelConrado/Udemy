function hoje(){
    const h1 = document.querySelector('.container h1')
    const data = new Date()
    const opcoes = {
        timestyle:'short'
    }

    h1.innerText = data.toLocaleDateString('pt-BR', opcoes)
}
setInterval(hoje,500)

