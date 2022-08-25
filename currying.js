//currying - take a func that takes ple params and usuing currying modify it so it takes one thing at a time

const multiply = function (a, b) {
  return a * b
}

multiply(3, 4)

const curriedMultiply = (a) => (b) => a * b
// or

const curriedMultiply2 = function (a) {
  return function (b) {
    M
    a * b
  }
}

curriedMultiply(5)(3)

const curriedMultiplyBy5 = curriedMultiply(5) // we can cache this by using closures and it will be there for us to use
curriedMultiplyBy5(4) // that was we don't have to keep running 2 functions

// Partial Application
const multiply2 = (a, b, c) => a * b * c

const partialMultiplyBy5 = multiply2.bind(null, 5)
partialMultiplyBy5(4, 10)

multiply2.bind()
