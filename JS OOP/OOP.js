// //* Change the Prototype to a New Object
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype = {
//   numLegs: 4,
//   eat: function () {
//     console.log("ruff ruff!");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   },
// };

// //* Remember to Se the Constructor Property when Changing the Prototype
// Dog.prototype = {
//   constructor: Dog, //% this will make sure we can use `.constructor` method to check it is an instance of a class
//   numLegs: 4,
//   eat: function () {
//     console.log("nom nom nom");
//   },
//   describe: function () {
//     console.log("My name is " + this.name);
//   },
// };

// //* Understand Where an Object's Prototype Comes From
// function Dog(name) {
//   this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle); //% same as `beagle instanceOf Dog`

// //* Understand the Prototype Chain
// Object.prototype.isPrototypeOf(Dog.prototype);

// //* Inherit Behaviors from a Supertype
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

// // @ This is not the best way to use inheritance. Using Object.create is a better method
// // let animal = new Animal()

//* Set the Child's Prototype to an Instance of the Parent
class Dog {
  constructor(name, color) {
    (this.name = name), (this.color = color);
  }
}

// Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog("Spot", "brown");
