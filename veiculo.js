const prompt = require("prompt-sync")()

const modelo = prompt("Qual o modelo do carro? ")
const marca = prompt("Qual a marca do carro? ")
const valor = Number(prompt("Preço R$: "))

let desconto 

if(marca == "Fiat"){
    desconto = valor * 0.10
}else{
    desconto = valor * 0.20
}

console.log(`Desconto R$: ${desconto.toFixed(2)}`)

const precoFinal = valor - desconto

console.log(`Preço final de ${modelo} - R$: ${precoFinal.toFixed(2)}`)