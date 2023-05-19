const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')
//O const pode adquirir qualquer nome. 

//console.long(listElement,inputElement, buttonElement)-> confere se está tudo certo, evitando analisar todo o codigo procurando erro.

const Tarefas = ["Estudar para a prova","Domir cedo"]

for (const i of Tarefas){//relembrando o const ainda continua modificavel
    //console.long(i)
    const TarefasElement = document.createElement("li")
    const TarefasText = document.createTextNode(i)
   // console.log(listElement,TarefasElement,TarefasText)
    TarefasElement.appendChild(TarefasText)
    listElement.appendChild(TarefasElement)
}