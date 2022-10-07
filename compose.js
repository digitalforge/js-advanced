// Compose - composing functions together - any sort of data transformation that we do should be obvious
// data --> fn --> data --> fn --> data and so on
// composability is a system design principal that selects and assembles a combination of functions to get the desired output

// fn1(fn2(fn3(50)));
// compose(fn1, fn2, fn3)(50)

// const compose = (f, g) => (data) => f(g(data))
// const multiplyBy3 = (num) => num * 3
// const makePositive = (num) => Math.abs(num)
// const multiplayBy3AndAbsolute = compose(multiplyBy3, makePositive)

// multiplayBy3AndAbsolute(-50)

// PIPE - instead of going from right to left we got from left to right
// fn1(fn2(fn3(50)));
// pipe(fn3, fn2, fn1)(50)
// const pipe = (f, g) => (data) => g(f(data))

// airty - the number of arguments a function takes
// in functional programming - a fewer number of params in a func the easier it is to use - why? Becuase it makes functions more flexible

// Functional Programming - doing one thing at a time and doing it well - pure functions - allows us to have a predictable program and this minimized bugs because it keeps things simple

// HOW ABOUT A LITTLE REDUCE? YEAH? OK

const vals = [12, 8, 4, 9, 10]
let sum = vals.reduce((p, c) => p + c)

console.log(sum)

const people = [
  {
    name: "Jon Doucette",
    age: 42,
    gender: "He",
  },
  {
    name: "Jake White",
    age: 34,
    gender: "He",
  },
  {
    name: "Tim Richards",
    age: 27,
    gender: "He",
  },
  {
    name: "Justine Grover",
    age: 55,
    gender: "She",
  },
]

const oldest = people.reduce((prev, curr) => {
  return prev.age > curr.age ? prev : curr
})
const youngest = people.reduce((prev, curr) => {
  return prev.age < curr.age ? prev : curr
})

console.log(
  `The oldest person is ${oldest.name}. ${oldest.gender} is ${oldest.age} years old`
)
console.log(
  `The youngest person is ${youngest.name}. ${youngest.gender} is ${youngest.age} years old`
)

const compose = function (f, g) {
  return function (data) {
    return g(f(data))
  }
}

const multiplyBy3 = function (num) {
  return num * 3
}

const makePositive = function (num) {
  return Math.abs(num)
}

const multiplayBy3AndAbsolute = compose(multiplyBy3, makePositive)
console.log(multiplayBy3AndAbsolute(-50))
