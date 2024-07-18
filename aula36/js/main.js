
const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const bgBody = estilosBody.backgroundColor

for(let i of ps){ 
  i.style.background = bgBody
  i.style.color = 'white'
}

