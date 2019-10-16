//Node.js

const readline = require("readline")
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let solution = Math.floor(Math.random()*100+1)
rli.on('line', (userinput) => {
    console.log("Vous avez entré:", userinput)
    console .log(solution)
    if(Math.abs(userinput - solution) <= 5 && userinput != solution){
        console.log("Vous êtes trés proche, réessayer !")
    }
    else if (Math.abs(userinput - solution) <= 10 && userinput != solution){
        console.log("Vous êtes proche, réessayer !")
    }
    else if (Math.abs(userinput - solution) > 20 && userinput != solution){
        console.log("Vous êtes loin, réessayer !")
    }
    else if (userinput == solution){
        console.log("Gagné !")
        rli.close()
    }

    
})


//Navigateur

//let solution = Math.floor(Math.random()*100+1)
//let entree = window.prompt("Devinez le nombre entre 1 et 100") 