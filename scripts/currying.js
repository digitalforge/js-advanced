//currying - take a func that takes multiple params and using currying modify it so it takes one thing at a time

const multiply = (a, b) => a * b
multiply(3, 4) // 12

// How can we use currying here? We want to change the func from taking multiple params to taking one at a time

const curriedMultiply = (a) => (b) => a * b
const curriedMultiplyLong = function (a) {
  return function (b) {
    return a * b
  }
}

const curriedMultiplyByFive = curriedMultiply(5)
curriedMultiplyByFive(3) // 15

// Partial Application

const multiply2 = (a, b, c) => a * b * c
// Here we 'partially' apply the 'a' param by binding it ( null is for the this keyword )
const partialMultiplyBy5 = multiply.bind(null, 5)
// then we can call the rest of the params by calling the function
partialMultiplyBy5(4, 10)
