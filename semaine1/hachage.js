
const crypto = require("crypto")

function pseudohachage(chaine){
    

    condensat = 0
    for(let i = 0;i < chaine.length; i++){
        console.log()
        condensat = (condensat + chaine.charCodeAt(i) * 10**(i+1)) % (2**32)

    }
    return condensat.toString(16)
}

function sha256(chaine){
    console.log("Entrée:", chaine)
    console.log("digest:", crypto.createHash("sha256").update(chaine).digest())
    return crypto.createHash("256").update(chaine).digest("hex")
}

//console.log(pseudohachage(process.argv[2]))


console.log(sha256(process.argv[2]))
data = Uint16Array.from([5])
console.log(sha256(data))


function h(chaine){
    condensat = 0
    for (let i = 0; i < chaine.length; i++) {
        condensat = (condensat + chaine.charCodeAt(i) *10**(i+1))
        
    }
    return condensat(chaine)
}
function sha256(chaine)


// Fonction qui fait un condensat de condensat

function doubleHachage(entree){
    entreebuffer = buffer.from(entree)
    hash = crypto.createHash("sha256").update(entreeBuffer).digest()
    doubleHash = crypto.createHash("256").update(hash).digest()

    return doubleHash
    
}

//Fonction qui produit une clé en prenant les 4 premiers octets du condensat

function cledeVerification(message){
    hash = crypto.createHash("sha256").update(message).digest("hex")
    cle = hash.substring(0,8)
    return cle
}
message = process.argv[2]
cle = cledeVerification(message)
console.log("Message:", message,"cle", cle)
console.log("Verification:",verification(message,cle))


//Fonction qui verifie un message avec sa clé

function verification(message,cle){
    return cledeVerification(message) == cle
}

//Fonction qui donne la chaine dont le hash commence par 666
