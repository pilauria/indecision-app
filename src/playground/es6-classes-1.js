// We use classes to reuse code
// Class = blueprint. Then we make multiples instances of that class for the individual items
// The structure is the same (same features), but each one can have some unique features

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// create a subclass of person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // calling the parent constructor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major; //  ***
  }
  // overriding the getDescription() of the parent class
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` His major is ${this.major}.`;
    }

    return description;
  }
}

// create another subclass of person
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += `I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

// make a new instance of the class Person
const me = new Traveler('Pietro Lauria', 43, 'Marittima');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());

// *** !!this.major => could be either a string (thruty value) or undefined (falsy value), so we convert the truty(falsy) value to true(false)

/* '' falsy value
   !'' convert the falsy  to  boolean true
   !!'' convert the falsy value and convert to false 
   !!'pietro' convert a truty value to true
   */
