function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []
     
    function recebeEventoForm(evento){
        evento.preventDefault(); //TIRA AS DEFINIÇOES PADROES
        
        let nome = form.querySelector('.nome')
        let sobreNome = form.querySelector('.sobrenome')
        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')
        let idade = form.querySelector('.idade')
        
        let objetos = {nome: nome.value, sobreNome: sobreNome.value, peso: peso.value, altura: altura.value, idade: idade.value} 

        pessoas.push(objetos) 
        console.log(pessoas)

        resultado.innerHTML += `${objetos.nome} ${objetos.sobreNome} ${objetos.peso} ${objetos.altura} ${objetos.idade}</br>`  



    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();



