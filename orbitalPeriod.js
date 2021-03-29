/*
 Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

 The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

 You can read about orbital periods on Wikipedia.

 The values should be rounded to the nearest whole number. The body being orbited is Earth.

 The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  // Equation Kepler's 3rd law:  * from Wikipedia
  // T = 2π * SQRT(a**3/GM)

  // The orbital period is function of a == semi-axis major of the orbit
  // in this case the distance from Earth needs to be accounted for
  // since the gravitational center is conveniently "placed" in its core

  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop over object and apply Kepler's Equation
  let orbitalPeriods = arr.map((obj) => {
    let a = obj.avgAlt + earthRadius;
    let t = 2 * Math.PI * Math.sqrt(a ** 3 / GM);
    // return array of objects with name, orbitalPeriod keys
    return { name: obj.name, orbitalPeriod: Math.round(t) };
  });

  return orbitalPeriods;
}

// Tests
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);
