/*
 Return true if the passed string looks like a valid US phone number.

 The user may fill out the form field any way they choose as long as it has the format of 
 a valid US number. The following are examples of valid formats for US numbers (refer to the 
    tests below for other variants):

 555-555-5555
 (555)555-5555
 (555) 555-5555
 555 555 5555
 5555555555
 1 555 555 5555

 For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;blaskdjf. 
 Your job is to validate or reject the US phone number based on any combination of the formats provided 
 above. The area code is required. If the country code is provided, you must confirm that the country code 
 is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
  // Filter improper inputs
  let charCheck = /([A-Za-z]+)|[.,\/#!?$%\^&\*;:{}=\_`~]/g.test(str);
  if (charCheck) {
    return false;
  }

  let parCheck = /\(+|\)+/.test(str);
  if (parCheck) {
    let patternCheck = /^(1)*\s*(\([0-9]{3}\))+/.test(str);
    if (!patternCheck) {
      return false;
    }
  }

  // Find match and join
  let matchStr = str.match(/([0-9]+)/g).join("");
  if (matchStr.length > 11 || matchStr.length < 10) {
    return false;
  }
  if (matchStr.length == 11 && !/^1/.test(matchStr)) {
    return false;
  }
  return true;
}
