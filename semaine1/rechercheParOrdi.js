//Exercice 1.1.2

const readline = require("readline")
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let np = Math.floor(Math.random()*100+1)
rli.on('line',(userinput) => {
    console.log("Vous avez entré:",userinput)

    while(np != userinput){
        
        if(np > userinput){
            np = np - 1
            console.log(np)
        }
        else if(np < userinput){
            np = np +1
            
        }
        rli.close()
    }
    console.log("Votre nombre est:", np)
}) 