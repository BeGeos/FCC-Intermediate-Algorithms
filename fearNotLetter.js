/**
 * Find the missing letter in the passed letter range and return it.
 If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    // Given the code of first character compare with the code of
    // first char + n° of iterations (i). If different one char has
    // been skipped.

    if (code !== str.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }
  return;
}

fearNotLetter("abce");
