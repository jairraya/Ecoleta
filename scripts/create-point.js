//Dados da entidade
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url) 
    .then( res => res.json() )
    .then( cities => {

        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//Itens de coleta
//pegar tos os li`s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
    
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //adicionar ou remover uma classe com javascript
    itemLi.classList.toggle("selected")

    const itemId = itemli.dataset.id

    //verificar se existem itens selecionados,
    //se sim, pegar os itens selecionados

    //se ja estiver selecionado, tirar da selecao

    //se nao estiver selecionado, adicionar a selecao

    //atualizar o canpo escondido com os itens selecionados 





}