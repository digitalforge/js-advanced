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
