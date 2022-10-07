//Classes

class Character {
  constructor(name, weapon, type) {
    this.name = name
    this.weapon = weapon
  }

  attack() {
    return `Attack with ${this.weapon}`
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
  }
}

const legolas = new Elf("Legolas", "Long Bow", "Wood Elf")

console.log(legolas)

//Factory Functions
const elfFunctions = {
  attack() {
    return `Attack with ${this.weapon}`
  },
}

function createElf(name, weapon) {
  const newElf = Object.create(elfFunctions)

  newElf.name = name
  newElf.weapon = weapon

  return newElf
}

const daphnie = createElf("Daphnie", "Short Bow")

console.log(daphnie)

// Constructor Functions

function Dwarf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Dwarf.prototype.attack = function () {
  return `Attack with ${this.weapon}`
}

const gimli = new Dwarf("Gimli", "Axe")
console.log(gimli)

// Some immutability stuff - meaning we don't want to change the state of the object but rather create a new one and then update that one instead- this sort of seems memory intensive? I'll have to look up 'Structual Sharing' - this is the concept that the data we us doesn't get completely copied but only the parts that we want to update.

const person = {
  name: "Jon",
  age: 43,
  job: "Web Developer",
}

function clone(obj) {
  return { ...obj }
}

function changeName(obj, name) {
  const newObj = clone(obj)
  newObj.name = name
  return newObj
}

const updatePerson = changeName(person, "Jake")
console.log(person, updatePerson)

const hof = (fn) => fn(5)
console.log(
  hof(function a(x) {
    return x
  })
)

// Memoization using closures

const addToNum = (function () {
  let cache = {}
  return function (num) {
    if (num in cache) {
      console.log(`This is the cached value ${cache[num]}`)
      return cache
    } else {
      cache[num] = num + 80
      console.log(`This is the non cached value ${cache[num]}`)
      return cache
    }
  }
})()

addToNum(10)
addToNum(10)
addToNum(10)
addToNum(10)
addToNum(10)
