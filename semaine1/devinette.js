//Node.js

const readline = require("readline")
const rli = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let solution = 0
rli.on('line', (userinput) => {
    console.log("Vous avez entré:", userinput)
    if(userinput == solution){
        rli.close()
    }
})


//Navigateur

let solution = Math.floor(Math.random()*100+1)
let entree = window.prompt("Devinez le nombre entre 1 et 100") 