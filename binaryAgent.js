/*
 Return an English translated sentence of the passed binary string.
 The binary string will be space separated.
*/

function binaryAgent(str) {
  const fromBinToDec = (bin, bit = 8) => {
    let exponent = bit - 1;
    let decimal = 0;
    for (let i = 0; i < bin.length; i++) {
      decimal += bin[i] * 2 ** exponent;
      exponent--;
    }

    return decimal;
  };

  return str
    .split(" ")
    .map((bin) => fromBinToDec(bin))
    .map((dec) => String.fromCharCode(dec))
    .join("");
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
