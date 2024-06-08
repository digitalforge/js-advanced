class CatWithStaticProp {
  constructor(name) {
    this.name = name
  }

  // good example of a static property
  // all instances of cats are the same species
  // it doesn't vary from one cat to another
  static genusSpecies = 'Felis catus'

  describe() {
    return `${this.name} is a ${CatWithStaticProp.genusSpecies}`
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name
    this.breed = breed
  }

  static regsiterStray(name, breed) {
    return new Cat(name, breed)
  }

  static meow() {
    return 'Meow!'
  }

  static species = 'Felis catus'
}

class MyMath {
  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }

  static multiply(a, b) {
    return a * b
  }

  static divide(a, b) {
    return a / b
  }
}

class ArrayUtils {
  constructor() {
    throw new Error('This class cannot be instantiated.')
  }

  static average(nums) {
    if (nums.length <= 0) throw new Error('Array cannot be empty.')
    let total = 0
    nums.forEach(num => (total += num))
    let average = total / nums.length
    return average
  }

  static max(nums) {
    return nums.reduce((p, c) => (p > c ? p : c))
  }
}
