const prompt = require("prompt-sync")()

const numero = Number(prompt("Número: "))

const raiz = Math.sqrt(numero)

if(raiz % 1 == 0){
    console.log(`A raíz de ${numero} é ${raiz}.`)
}else{
    console.log(`O número ${numero} não possui raíz exata.`)
}