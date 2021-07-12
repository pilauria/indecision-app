// function arguments not anymore defined

// const add = function (a, b) {
//   console.log(arguments); // returns the object argument
//   return a + b;
// };

const add = (a, b) => {
  console.log(arguments); // error: arguments is not defined
  return a + b;
};

console.log(add(55, 1, 4545));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return
  numbers: [1, 2, 3, 4],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
