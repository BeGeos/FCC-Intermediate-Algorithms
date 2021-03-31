/**
 Design a cash register drawer function checkCashRegister() that accepts purchase price 
 as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) 
 as the third argument.

 cid is a 2D array listing available currency.

 The checkCashRegister() function should always return an object with a status key and a change key.

 Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
 or if you cannot return the exact change.

 Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if 
 it is equal to the change due.

 Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted 
 in highest to lowest order, as the value of the change key.
 */

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let registerTotal = cid.reduce((sum, item) => sum + item[1], 0);
  // In case chenge is greater than cash in register
  if (change > registerTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // In case chenge is equal to cash in register
  if (change == registerTotal) {
    return { status: "CLOSED", change: cid };
  }

  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let keys = Object.keys(currencyUnit);

  // Creating an object out of cid to know how many of each are in the
  // register
  let cashValue = {};
  cid.forEach(
    (currency) =>
      (cashValue[currency[0]] = Math.round(
        currency[1] / currencyUnit[currency[0]]
      ))
  );

  // For loop to see the parts of coins/cash to sum up the change due
  // As per instructions this returns the name of currency and the change for each
  // e.g: [QUARTER: 0.5] --> it means "return 0.5c in quarters"
  // However, I don't like this kind of return value and this loop can be modified to actually return
  // the number of currency to return as in --> [QUARTER: 2] meaning "return 2 quarters"
  // Just change : parts * currencyUnit[keys[i]] ==> parts
  // TODO: this algorithm doesn't update the register everytime change is given.
  //       An addition, could be to update the value each time, store it and create a "real"
  //       cash register machine
  let changeValue = [];
  for (let i = keys.length - 1; i >= 0; i--) {
    change = Number(change.toFixed(2));
    let parts = change / currencyUnit[keys[i]];
    if (parts >= 1) {
      parts = Math.floor(parts);
      if (cashValue[keys[i]] == 0) {
        continue;
      }
      if (parts <= cashValue[keys[i]]) {
        changeValue.push([keys[i], parts * currencyUnit[keys[i]]]);
        change -= currencyUnit[keys[i]] * parts;
      } else {
        parts = cashValue[keys[i]];
        changeValue.push([keys[i], parts * currencyUnit[keys[i]]]);
        change -= currencyUnit[keys[i]] * parts;
      }
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeValue };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
