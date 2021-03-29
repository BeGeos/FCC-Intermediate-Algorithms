/*
 Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  let newArr = [...arr];
  let flatten = [];

  function flat(item) {
    // Base case
    if (!Array.isArray(item)) {
      flatten.push(item);
      return item;
    }
    // Recursion
    for (let i = 0; i < item.length; i++) {
      flat(item[i]);
    }
  }

  for (let j = 0; j < newArr.length; j++) {
    flat(newArr[j]);
  }

  return flatten;
}

steamrollArray([1, [2], [3, [[4]]]]);
console.log(steamrollArray([1, {}, [3, [[4]]]]));
