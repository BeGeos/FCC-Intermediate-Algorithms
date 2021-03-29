/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 *First argument is the sentence to perform the search and replace on.
 *Second argument is the word that you will be replacing (before).
 *Third argument is what you will be replacing the second argument with (after).
 */

 function myReplace(str, before, after) {
    let newStr = str.split(/\W/);
    let index = newStr.indexOf(before);
  
    // Check if starts with capital letter
    if (/^[A-Z]/.test(newStr[index])) {
      newStr.splice(index, 1, (after.charAt(0).toUpperCase() + after.slice(1)));
    } else {
      newStr.splice(index, 1, after.toLowerCase())
    };
  
    return newStr.join(" ")
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");