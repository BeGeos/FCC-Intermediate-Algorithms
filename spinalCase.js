/* 
  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
    /* Split input string w/ regular expression: 
      * Punctuation;
      * _ underscores;
      * Capital letters included
    */
    let newStr = str.split(/\W|_|(?=[A-Z])/g);
    
    // newStr Iteration
    let output = newStr.map(word => word.toLowerCase()).join("-");
    
    return output;
  }
  
  spinalCase('The_Andy_Griffith_Show');
  spinalCase("thisIsSpinalTap");
  