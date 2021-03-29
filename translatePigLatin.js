/*
Pig Latin is a way of altering English Words. The rules are as follows:
 *If a word begins with a consonant, take the first consonant or consonant cluster, 
  move it to the end of the word, and add ay to it.
 *If a word begins with a vowel, just add way at the end.
 */

 
function translatePigLatin(str) {
    let vowels = /^[aeiou]/
    if (vowels.test(str)) {
      return str + "way"
    } else {
      // Regexp for picking all consonants
      let match = str.match(/^((?![aeiou])[a-z])+/g);
      let index = match[0].split("").length;
      return str.substr(index) + str.substr(0, index) + "ay"
    };
  }
  
  translatePigLatin("glove");