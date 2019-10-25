const crypto = require("crypto")
const base58 = require("base-58")
/*
let c = crypto.randomBytes(32)
let buf = Buffer.from(c, 'hex')

function sha256(){
    hash = crypto.createHash('sha256').update(buf).digest()
    return hash
}

function ripemd160(){
    hash160 = crypto.createHash('ripemd160').update(sha256()).digest()
    return hash160
}


function adresseBitcoin(clePublique){

}

console.log(ripemd160())*/

function ripemd160(c){
    return crypto.createHash('ripemd160').update(c).digest()
}

function sha256(c){
    return crypto.createHash('sha256').update(c).digest()
}

function adresseBitcoin(){

    let hash160 = ripemd160(sha256(clePublique))

    let adresse = "00" + hash160 + sha256(sha256(Buffer.from("00" + hash160 + "hex"))).substr(0,8)

    let adresseb58 = bs58.encode(Buffer.from(adresse, "hex"))
    return 1+adresseb58
}