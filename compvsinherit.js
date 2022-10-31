//Classes or inheritence

class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }

  attack() {
    return `Attack with ${this.weapon}`
  }
}

class Dwarf extends Character {
  constructor(name, weapon, type, beardType) {
    super(name, weapon)
    this.type = type
    this.beardType = beardType
  }
}

//Composition

function getAttack(character) {
  const attack = () => `Attack with ${character.weapon}`
  return Object.assign({}, character, { attack })
}

function Elf(name, weapon, type) {
  let elf = {
    name,
    weapon,
    type,
  }

  return getAttack(elf)
}

const legolas = new Elf("Legolas", "Bow", "Wood")
console.log(legolas.attack())

// We can do this a bit different as well. Create an object called 'elfFunctions' and list out the functions we want an elf to use. Then we just use 'Object.create' in the createElf functions, add the properties to the elf, then return it.

const elfFunctions = {
  attack() {
    return `Attack with ${this.weapon}`
  },
}

function createElf(name, weapon, type) {
  let newElf = Object.create(elfFunctions)

  newElf.name = name
  newElf.weapon = weapon
  newElf.type = type

  return newElf
}

const daphnie = createElf("Daphnie", "Sword", "High Elf")

daphnie.attack()
