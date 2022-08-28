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
