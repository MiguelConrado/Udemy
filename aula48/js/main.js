
const inputTarefa = document.querySelector('#prox-tarefas-input')
const btnTarefa = document.querySelector('#adicionar-tarefa')
const ul = document.querySelector('#lista-container')

function criarLi(){
    const li = document.createElement('li')
    return li
}
function criarBtnApagar(li){
    li.innerHTML += '  '
    const btnApagar = document.createElement('button')
    btnApagar.setAttribute('class', 'apagar' )
    btnApagar.setAttribute('title', 'Apagar Esse Item')
    btnApagar.innerText = 'apagar'
    li.appendChild(btnApagar)
    
    return btnApagar
}

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus()
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function criaTarefa(tarefa){
    const li = criarLi()
    li.innerHTML = tarefa
    ul.appendChild(li)
    limpaInput()
    criarBtnApagar(li)
    salvarTarefas()
}


btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
    salvarTarefas()
})

document.addEventListener('click', function(e){
    const el = e.target;
    
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})


function salvarTarefas(){
    const liTarefas = ul.querySelectorAll('li');
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adcionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adcionaTarefasSalvas()