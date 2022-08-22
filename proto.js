// FACTORY FUNCTIONS
const elfFunctions = {
  attack() {
    return `Attack with ${this.weapon}`
  },
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions)

  newElf.name = name
  newElf.weapon = weapon

  return newElf
}

const legolas1 = createElf("Legolas", "Long Bow")

// CONSTRUCTOR FUNCTIONS
function Elf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Elf.prototype.attack = function () {
  return `Attack with ${this.weapon}`
}

const legolas2 = new Elf("Legolas", "Long Bow")
//console.log(Elf.prototype)
//console.log(legolas.__proto__)

// Function Constructor

const Elf1 = new Function(
  "name",
  "weapon",
  `this.name = name;this.weapon = weapon;`
)

const sarah = new Elf1("Sarah", "Fists")
console.log(sarah.__proto__)

// CLASSES

class Dwarf {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  attack() {
    return "attack with " + this.weapon
  }
}

const gimli = new Dwarf("Gimli", "Axe")

//CLOSURES STUFF

let view

const init = (function () {
  let typeList = []
  return function (type) {
    if (typeList.includes(type)) {
      console.log(`You already initilized the ${type}`)
      return
    } else {
      typeList.push(type)
      view = type
      console.log(`${view} view inialized`)
    }
  }
})()

// init("Menu")
// init("Menu")
// init("Nav")
// init("Menu")
// init("Nav")
// init("Nav")
// init("Menu")
// init("Welcome")

// Object Create practice with Factory functions

const humanProto = {
  greet() {
    return `Hello, my name is ${this.name}`
  },
  goodBye() {
    return `Talk to you later!`
  },
  sayAge() {
    return `I am ${this.age} years old`
  },
  sayJob() {
    return `I am a ${this.job}`
  },
}

//this is a factory function

function createHuman(name, age, job) {
  let human = Object.create(humanProto) // the Object.create creates an object from the arugment that you pass it. This makes the object the prototype of that object
  human.name = name
  human.age = age
  human.job = job

  return human
}

const jon = createHuman("Jon", 43, "Web Developer")

// Memoization attempt

// not memoized - we don't want this because everytime we use this function if the same argument is passed to it, it will have to do calculate it every time

function addToNum(n) {
  console.log("Long time...")
  return n + 80
}

// instead we want to do it this way

const addToNum2 = (function () {
  let cache = {} // create the object we are going to use as a cache
  let count
  return function (n) {
    // we return an annoymous function since we are using closures
    if (n in cache) {
      count = cache[n].count++
      console.log(cache[n].count)
      const message =
        count > 1
          ? `You already used tried using ${cache[n].n} ${count} times`
          : `You already used ${cache[n].n}`
      console.log(message)
      return
    } else {
      cache[n] = { n: n + 80, count: 1 }
      console.log(cache)
      return cache
    }
  }
})() // we envoke this function immediately so that we don't need to cache it. We can do it either way. I'll do it both ways just so it drills it home

addToNum2(5)
addToNum2(5)
addToNum2(5)
addToNum2(5)
addToNum2(5)
addToNum2(10)
addToNum2(10)
addToNum2(10)

const testFunc = {
  test1() {
    console.log(this + " test1")
  },
  test2() {
    console.log(this + " test2")
  },
  test3() {
    console.log(this + " test3")
  },
}

// factory function
function createTest(testName, testType) {
  let newTest = Object.create(testFunc)
  newTest.testName = testName
  newTest.testType = testType

  return newTest
}

const testing = createTest("log", "console")
