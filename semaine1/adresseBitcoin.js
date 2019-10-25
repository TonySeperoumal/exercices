const Crypto = require("crypto-js")


function secureMathRandom() {
    // Divide a random UInt32 by the maximum value (2^32 -1) to get a result between 0 and 1
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / ((2^32) - 1)
  }

  console.log(secureMathRandom())