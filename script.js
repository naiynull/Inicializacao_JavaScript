const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')//se tem # ele é uma âncora


const Tarefas = JSON.parse(localStorage.getItem("Tarefas")) || []//pegas os dados disponiveis que foram inseridos pelo usuário (armarzenamento)
//O const pode adquirir qualquer nome. 

//console.long(listElement,inputElement, buttonElement)-> confere se está tudo certo, evitando analisar todo o codigo procurando erro.



function renderTarefas() {
    listElement.innerHTML = ""//limpar
    console.log(Tarefas)
    for (const i of Tarefas) {//relembrando o const ainda continua modificavel
        //console.long(i)
        const TarefasElement = document.createElement("li")
        const TarefasText = document.createTextNode(i)
        // console.log(listElement,TarefasElement,TarefasText)
        const linkElement = document.createElement("a")//criou a tag "a"
        linkElement.setAttribute("href", "#")
        const pos = Tarefas.indexOf(i)//"pos" é uma constate (variavel)
        linkElement.setAttribute("onclick", `deletTarefa(${pos})`)//o $ atribui o "pos" no "deleTarefas(função)"
        const linktext = document.createTextNode("Excluir")//aparece o texto de exclui uma linha (no caso "a"->referente ao html)
        linkElement.appendChild(linktext)

        TarefasElement.appendChild(TarefasText)//acrescenta o texto
        TarefasElement.appendChild(linkElement)//acrescenta o link
        listElement.appendChild(TarefasElement)
    }
}

renderTarefas()//chamar função

function addTarefas() {
const Tarefas = ["Estudar para a prova", "Domir cedo"]
}

function deletTarefa(pos) {//excluir 
    //delete Tarefas[pos]-> esse delet deixa o espaço vazio não é indicado o uso
    Tarefas.splice(pos, 1)
    renderTarefas()
    saveToStorage()

}
//submeter=recarregar pag, mas no caso do "enter" está sendo submetido com uma âncora 

// seu Java Scrip vai usar do amarzenamento do usuário para guardar os dados delas

function saveToStorage() {
    localStorage.setItem("Tarefas", JSON.stringify(Tarefas))//"setitem" possui a função de amarzenar 
}