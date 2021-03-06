/*
  Make a function that looks through an array of objects (first argument) and returns 
  an array of all objects that have matching name and value pairs (second argument). 
  Each name and value pair of the source object has to be present in the object from 
  the collection if it is to be included in the returned array.
*/ 

function whatIsInAName(collection, source) {
    var arr = [];

    // Array of source keys
    let keys = Object.keys(source);

    // Checker Function
    for (let i = 0; i < collection.length; i++) {
        let obj = collection[i];
      if (keys.every(key => obj.hasOwnProperty(key) && obj[key] == source[key])) {
        arr.push(obj)
      }
    };

    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });