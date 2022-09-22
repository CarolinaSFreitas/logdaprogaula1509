const prompt = require("prompt-sync")()

const numero = Number(prompt("Número: "))

if(numero % 2 == 0){
    console.log(`Próximo par é ${numero + 2}`)
}else{
    console.log(`Próximo par é ${numero + 1}`)
}

