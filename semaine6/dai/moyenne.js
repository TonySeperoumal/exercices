const daiPrice = require('./daiPrice.js')
const uniswap = require('./uniswap.js')

async function getAverage() {
let value1 = daiPrice.readMedianizer()
let value2 = uniswap.priceInWei()
let average = (value1 + value2) / 2
return average
})
}

getAverage().then((result) => {
  console.log(result)
})