function creatingElement(){
  
  const elementos = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'}
  ]

  const div = document.createElement('div') //cria a div
  const section = document.querySelector('.container') //section principal

function criarElementos(){
  for (let i = 0; i < elementos.length; i++){
    let tag = elementos[i].tag
    let texto = elementos[i].texto
    let criar = document.createElement(tag)
    criar.innerText = `${texto}`

    div.appendChild(criar) //coloca os elementos dentro da div
    section.appendChild(div) //coloca a div dentro da section
}}
criarElementos()//chama a Função q colocou esses elementos

}
creatingElement()//chama a funcão total

