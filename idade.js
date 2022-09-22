const prompt = require("prompt-sync")()

const nome = prompt("Qual é o seu nome? ")
const ano = prompt("Ano de nascimento: ")

const idadeAnos = 2022 - ano

console.log(`${nome}, você tem ${idadeAnos} anos.`)

if(idadeAnos >= 18){
    console.log(`Você é maior de idade, ${nome}.`)
}else{
    console.log(`Você é menor de idade, ${nome}.`)
}
