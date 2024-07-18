const elementos = [
  {tag: 'p', texto: 'Frase1'},
  {tag: 'div', texto: 'Frase2'},
  {tag: 'footer', texto: 'Frase3'},
  {tag: 'section', texto: 'Frase4'}
]

const div = document.createElement('div') //cria a div
const section = document.querySelector('.container') //section principal

for (let i = 0; i < elementos.length; i++){
  const {tag, texto} = elementos[i];
  const tagCriada = document.createElement(tag)
  const textoCriado = document.createTextNode(texto)

  tagCriada.appendChild(textoCriado)
  div.appendChild(tagCriada)
}

section.appendChild(div)

