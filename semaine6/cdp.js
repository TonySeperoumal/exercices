// 1 - quel est le niveau de collateralization
const minRatio = 1.5
let ethUsd = 100
let ethDeposit = 2
let mDai = 100

let collateralization = (ethDeposit * ethUsd / mDai) * 100

console.log(collateralization + " %")

// 2 - quel est mon cours de liquidation

let liquidationPrice = (mDai * minRatio) / ethDeposit

console.log(liquidationPrice + " $")

// 3 - ce contrat se fait liquider, que se passe t-il?

const tax = 0.13
ethUsd = liquidationPrice

let newDepositValue = ethDeposit * ethUsd
let newDeposit = newDepositValue - mDai * (1 + tax)

console.log(newDeposit)

let newEthDeposit = newDeposit / ethUsd

console.log("Votre nouveau depôt est de", ethDeposit, "Eth")

// j'ai toujours mes DAI, quelle est ma perte nette en eth ?

let newEthValue = mDai / ethUsd
let totalEth = newEthValue + newEthDeposit
let ethLost = ethDeposit - totalEth

console.log(ethLost + " Eth")