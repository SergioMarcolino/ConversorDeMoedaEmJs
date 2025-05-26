// Cotacao de moedas do dia.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo elementos do  formulario
const form = document.querySelector("form")
const currency = document.getElementById("currency")
const amount = document.querySelector("#amount")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g //Criando o regex
    amount.value = amount.value.replace(hasCharactersRegex, "") //Usanbdo o regex para validar a entrada do usuario 
})


// Capturando o evento de submit do formulario
form.onsubmit = (e) => {
    e.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR,"€")
            break
        case "GBP":
            convertCurrency(amount.value. GBP, "£")
            break
    }
}

// Funcao para converter a moeda 

function convertCurrency(amount,price, symbol){
    try {
         // Exibindo a cotacao da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `
        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

        // Calculado total
        let total = price * amount

        if(isNaN(total)){
            return alert("Por favor, digite o valor corretamente.")
        }
        result.textContent = `${formatCurrencyBRL(total)} Reais`
        


    }catch(error){
        
        // Remove a classe do footer ocultando ele
        footer.classList.remove("show-list")
        console.log(error)
        alert("Nao foi possivel converter. Tente novamnete mais tarde.")
    }

}
// Formata a moeda para o padrao Brasileiro
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR",{
        style:"currency",
        currency: "BRL",
    } )
}