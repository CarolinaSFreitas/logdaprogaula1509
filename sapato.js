const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const valor = Number(prompt("Preço R$: "))

if(valor < 100){
    console.log(`O valor de R$${valor} deve ser pago à vista.`)
}else{
    const parcelar = valor / 3
console.log(`O valor de R$${valor} pode ser pago em 3x no valor de R$${parcelar.toFixed(2)}.`)
}