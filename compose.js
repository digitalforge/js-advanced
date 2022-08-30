// Compose - composing functions together
const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data))
const multiplyBy3 = (num) => num * 3
const makePositive = (num) => Math.abs(num)

// const compose = function (f, g) {
//   return function (num) {
//     return f(g(num))
//   }
// }

// const multiplyBy3 = function (num) {
//   return num * 3
// }

// const makePositive = function (num) {
//   return Math.abs(num)
// }

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)

// PIPE

const compose2 = (f, g) => (data) => f(g(data))

const firstPart = (text) => text
const secondPart = (text) => text + " is joined together"

const joinParts = compose2(firstPart, secondPart)("The Function")

// airty - the number of arguments a function takes
// in functional programming - a fewer number of params in a func the easier it is to use - why? Becuase it makes functions more flexible

// Functional Programming - doing one thing at a time and doing it well - pure functions - allows us to have a preditable program and this minimized bugs because it keeps things simple
