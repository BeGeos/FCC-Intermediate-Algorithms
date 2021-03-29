/*
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
    in a string to their corresponding HTML entities.
    * & => &amp;
    * < => &lt;
    * > => &gt;
    * " => &quot;
    * ' => &apos;
*/

function convertHTML(str) {
  // HTML mapper
  const mapper = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&apos;",
    '"': "&quot;",
  };

  let newStr = str.split("");
  return newStr.map((char) => mapper[char] || char).join("");
}

convertHTML("Dolce & &Gabbana");
convertHTML("Schindler's List");
convertHTML("<>");
