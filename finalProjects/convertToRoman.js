/*
 Convert the given number into a roman numeral.
 All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  function getNumeral(digit, lowRom, midRom, highRom) {
    switch (true) {
      case digit <= 3:
        return lowRom.repeat(digit);
      case digit === 4:
        return lowRom + midRom;
      case digit <= 8:
        return midRom + lowRom.repeat(digit - 5);
      default:
        return lowRom + highRom;
    }
  }

  let str = "";

  // Thousands
  str += "M".repeat(Math.floor(num / 1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num / 100), "C", "D", "M");
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num / 10), "X", "L", "C");
  num %= 10;

  // Units
  str += getNumeral(num, "I", "V", "X");

  console.log(str);
  return str;
}

convertToRoman();
