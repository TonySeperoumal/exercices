const crypto = require("crypto")

function h(chaine){
    condensat = 0
    for (let i = 0; i < chaine.length; i++) {
        condensat = (condensat + chaine.charCodeAt(i) *10**i)
        
    }
    return condensat(chaine)
}

function minage(block, cible){
     num = Math.floor(Math.random()*20)
     buf = Buffer.from(num,'hex')
     console.log


}