const person3 = {
  name: "Jon",
  age: 42,
  self: () => {
    console.log(this)
  },
}

person3.self()

function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
}

Person.prototype.func = function () {
  console.log(this)
}

const jon = new Person("Jon", "42", "Web Developer")

function a(param = 6) {
  console.log(param)
}

a(8)

// // function Elf(name, weapon) {
// //   this.name = name
// //   this.weapon = weapon
// //   console.log(this)
// // }

// // Elf.prototype.attack = function () {
// //   return `attack with ${this.weapon}`
// // }

// // const legolas = new Elf("Legolas", "Bow")
// // console.log(legolas.attack())

// // const today = new Date()

// // console.log(today.getMonth())

// // class Elf {
// //   constructor(name, weapon) {
// //     this.name = name
// //     this.weapon = weapon
// //   }

// //   attack() {
// //     return `attack with ${this.weapon}`
// //   }
// // }

// // const jon = new Elf("Jon", "Sword")
// // console.log(jon.attack())

// // new binding this
// function Person(name, age) {
//   this.name = name
//   this.age = age
// }

// const person1 = new Person("Jon", "33")

// //implicit binding
// const person = {
//   name: "Karen",
//   age: 33,
//   hi() {
//     console.log("hi " + this.name)
//   },
// }

// class Character {
//   constructor(name, weapon) {
//     this.name = name
//     this.weapon = weapon
//   }

//   attack() {
//     return `attack with ${this.weapon}`
//   }
// }

// class Elf extends Character {
//   constructor(name, weapon, type) {
//     super(name, weapon)
//     this.type = type
//   }
// }

// class Ogre extends Character {
//   constructor(name, weapon, color) {
//     super(name, weapon)
//     this.color = color
//   }
//   makeFort() {
//     return "strongest fort in the world made"
//   }
// }

// class PolyMorph extends Character {
//   constructor(name, weapon, type) {
//     super(name, weapon)
//     this.type = type
//   }

//   attack(att) {
//     return super.attack(att)
//     //return "attack with " + att
//   }
// }

// const test = new PolyMorph("Test", "Test Weapon", "Test Type")

// const legloas = new Elf("Legolas", "Sword", "Wood")

// const shrek = new Ogre("Shrek", "Club", "green")

class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return "attack with " + this.weapon
  }
}

class Queen extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }

  attack() {
    console.log(super.attack())
    return `I am the ${this.name} of ${this.type}, now bow down to me`
  }
}

//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen("Victoria", "army", "hearts") // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
const gretchin = new Queen("Grethchin", "army", "clubs")
victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

const multiplyBy = (num1) => {
  return (num2) => {
    console.log(this)
    return num1 * num2
  }
}

const multiplayByTwo = multiplyBy(2)
multiplayByTwo(10)

const person = {
  name: "Test",
  sayName: () => {
    console.log(this)
  },
}

const character = {
  name: "Simon",
  getCharacter() {
    return this.name
  },
}

const character2 = {
  name: "Jon",
}

const giveMeTheCharacterNOW = character.getCharacter.bind(character)
const giveMeTheCharacterNOW2 = character.getCharacter.bind(character2)

// MORE CLOSURES

function a() {
  var grandpa = "grandpa"
  return function b() {
    var father = "father"
    return function c() {
      var son = "son"
      console.log(`${grandpa} > ${father} > ${son}`)
    }
  }
}

function boo(string) {
  return function (name) {
    return function (name2) {
      console.log(`${string} ${name} ${name2}`)
    }
  }
}

const booString = boo("test")
const booName1 = booString("Jon")
const booName2 = booName1("Frank")

// new binding this
function Person(name, age) {
  this.name = name
  this.age = age
}

const person1 = new Person("Jon", 43)

// imlplicit binding
const girl = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("hi" + this.name)
  },
}

// explicit binding
const girl2 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log("hi " + this.name)
  },
}

girl2.hi()

//arrow function
const girl3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log(this)
    var inner = function () {
      console.log("hi " + this)
    }
    return inner()
  },
}

girl3.hi()
