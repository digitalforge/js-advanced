//fill array with 60000 elements
// const list = new Array(60000).join("1.1").split(".")

// function removeItemsFromList() {
//   var item = list.pop()

//   if (item) {
//     setTimeout(removeItemsFromList, 0)
//   }
// }

// removeItemsFromList()

// var favouriteFood = "grapes"

// var foodThoughts = function () {
//   console.log("Original favourite food: " + favouriteFood)

//   var favouriteFood = "sushi"

//   console.log("New favourite food: " + favouriteFood)
// }

// foodThoughts()

// function marry(person1, person2) {
//   console.log(arguments)
//   return `${person1} is now married to ${person2}`
// }

// console.log(marry("Jim", "Tina"))
// var x = "x"
// function findName() {
//   console.log(x)
//   var b = "b"
//   return printName()
// }

// function printName() {
//   var c = "c"
//   return "Jon Doucette"
// }

// function sayMyName() {
//   var a = "a"
//   return findName()
// }

// sayMyName()
// Weird Javascript #1 - it asks global scope for height. Global scope says: ummm... no but here I just created it for you.
// ps this isn't allowed in strict mode. We call this leakage of global variables.
// function weird() {
//   height = 50
// }

// var heyhey = function doodle() {
//   // code here
// }

// heyhey()
// doodle() // Error! because it is enclosed in its own scope.

// const a = function () {
//   console.log("a", this)
//   const b = function () {
//     console.log("b", this)
//     const c = {
//       hi: function () {
//         console.log("c", this)
//       },
//     }
//     c.hi()
//   }
//   b()
// }

// a()

// const obj = {
//   name: "Billy",
//   sing() {
//     console.log("a", this)
//      let self = this
//     var anotherFunc = function () {
//       console.log("b", self)
//     }

//     return anotherFunc()
//   },
// }

// obj.sing()

// const array = [1, 2, 3]

// function getMaxNumber(arr) {
//   console.log(Math.max.apply(null, arr)) // why ? Because apply accepts an array
// }

// getMaxNumber(array) // should return 3

const enemy = {
  name: "Dragon",
  health: 100000,
  abilities: {
    fireBreath: 200,
    tailWhip: 100,
  },
  attack: function (damage1, damage2) {
    this.health = this.health - (damage1 + damage2)
  },
}

const hero = {
  name: "Dirk the Daring",
  health: 10000,
  abilities: {
    block: 100,
    swordSwing: 250,
  },
}

//console.log(hero.health)
//let attackHero = enemy.attack.call(hero, enemy.abilities.fireBreath)
//console.log(hero.health)

let attackHero = enemy.attack.apply(hero, [
  enemy.abilities.fireBreath,
  enemy.abilities.tailWhip,
])
console.log(
  `${enemy.name} hit ${hero.name} for ${
    enemy.abilities.fireBreath + enemy.abilities.tailWhip
  }. His health is now ${hero.health}`
)

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

//How Would you fix this?
//console.log("?", giveMeTheCharacterNOW()) //this should return 'Simon' bud doesn't
//console.log("?", giveMeTheCharacterNOW2()

// let obj1 = { name: "Jon", password: "123" }
// let obj2 = obj1

// obj2.password = "easy"

// console.log(obj1)
// console.log(obj2)

// var user1 = { name: "nerd", org: "dev" }
// var user2 = { name: "nerd", org: "dev" }
// var eq = user1.name == user2
// // gives false
// //alert(eq)

// // solution
// var eq2 = JSON.stringify(user1) == JSON.stringify(user2)

//alert(eq2)

const number = 100
const string = "Jay"
let obj1 = {
  value: "a",
}
let obj2 = {
  value: "b",
}
let obj3 = obj2

function change(number, string, obj1, obj2) {
  number = number * 10
  string = "Pete"
  obj1 = obj2
  obj2.value = "c"
}

change(number, string, obj1, obj2)

//Guess the outputs here before you run the code:
console.log(number)
console.log(string)
console.log(obj1.value)

const four = new Function("num", "return num")
four(5)

function woohoo(test) {
  console.log("whoooohooo")
}

woohoo.yell = "ahhhhhh"

function a(param = 6) {
  return param
}

a()

// exercise
function callMeMaybe() {
  const callMe = "Hi! I am now here!"
  setTimeout(function () {
    console.log(callMe)
  }, 4000)
}

callMeMaybe()
