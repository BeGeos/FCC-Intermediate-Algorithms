/*
 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
 In a shift cipher the meanings of the letters are shifted by some set amount.

 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
 Thus A ↔ N, B ↔ O and so on.

 Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
 but do pass them on.
*/

// Cipher && Decipher

function rot13(str) {
  let deciphered = "";

  // Helper function
  function findLetter(letter) {
    // Alphabet range is 65 - 90
    let index = letter.charCodeAt();

    if (index < 65 || index > 90) {
      return letter;
    }

    index -= 13;

    if (index < 65) {
      let delta = 65 - index;
      index = 91 - delta;
    }

    return String.fromCharCode(index);
  }

  for (let letter of str) {
    deciphered += findLetter(letter);
  }

  return deciphered;
}

rot13("HEY MY NAME IS BEGEOS");
rot13("URL ZL ANZR VF ORTRBF");

// URL ZL ANZR VF ORTRBF
// HEY MY NAME IS BEGEOS
