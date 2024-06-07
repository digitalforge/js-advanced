// // ;(function () {
// //   var Rand = "Althor"
// //   var DarkOne = "Beelza"

// //   function fight(char1, char2) {
// //     var attack1 = Math.floor(Math.random() * char1.length)
// //     var attack2 = Math.floor(Math.random() * char2.length)

// //     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
// //   }

// //   console.log(fight(Rand, DarkOne))
// // })()

// let fightModule = (function () {
//   let rand = "althor"
//   let evil = "dark one"

//   const privateFuction = () => {
//     return "something private"
//   }
//   function fight(char1, char2) {
//     let attack1 = Math.floor(Math.random() * char1.length)
//     let attack2 = Math.floor(Math.random() * char2.length)

//     return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
//   }
//   // the cool part about this is we only have to return what we want to give access to so we can create private functions that only this module has access to
//   return {
//     fight: fight,
//   }
// })()

// // Common JS & AMD (asynchronus module definition) & UMD

// // Common JS - modules are meant to be ordered synchronously (this means it will wait until one module is loaded before loading the next one) - this is not good for browsers - there was work arounds for this like 'browserify'
// // Common JS was mainly used on the server
// var module1 = require("module1")
// var module2 = require("module2")

// function fight() {}

// module.exports = {
//   fight: fight,
// }

// // AMD
// define(["module1", "module2"], function (module1Import, module2Import) {
//   var module1 = module1Import //.fight;
//   var module2 = module2Import //.importedFunc2

//   function dance() {}

//   return {
//     dance: dance,
//   }
// })

//ES6 Modules
//import module1 from 'module1'
//import module2 from 'module2'

const rand = "Althor"
const darkOne = "Be'elz"

function jump() {}

export function fight2(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length)
  const attack2 = Math.floor(Math.random() * char2.length)

  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}
