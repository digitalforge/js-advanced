// no side effects
// input --> output

const array = [1, 2, 3]
function mutateArray(arr) {
  // this function has side effects because it modifies the array outside of itself
  arr.pop()
}

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1)
  })
}

mutateArray(array)
mutateArray2(array)
console.log(array)

// Idempotence: Being able to call something over and over and always getting the same results. Why is this good? Because it makes our code predictable

function notGood(num) {
  console.log(num)
}

notGood(5)

/* 
Imperative vs Declarative ... and wtf does that mean? 
Impretiatve code tells the machine what to do and HOW to do it
Declarative code tells the machine what to do and WHAT SHOULD happen, not how to do it 

FUNCTIONAL PROGRAMMING LETS US BE MORE DECLARATIVE 

*/

for (let i = 0; i < 1000; i++) {
  console.log(i) // this is a more imperative way
}

;[1, 2, 3].forEach((item) => console.log(item)) // this is more declarative because we use less instruction

// Immutability - not changing the data or state - but rather making copies of it and returning a new state everytime

const obj = { name: "Jon" }
function clone(obj) {
  return { ...obj } // this is pure because we are just cloning the obj instead of changing it
}
// now say we wanted to change the name in the object... we'd create a function to handle that

function updateName(obj) {
  const obj2 = clone(obj)
  obj2.name = "Gina"
  return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)

// Revisiting Higher Order Functions
// Functions are first class citizens

//HOF
// function that takes one or more function as arguements or returns a func as a result - a Callback

const hof = () => () => 5 // a function that returns a function

const hof2 = (fn) => fn(5) // a function that takes a function as a parameter
hof2(function a(x) {
  return x
})

// Closure - a method of containing some sort of state - we simply define a function inside another function

const closure = function () {
  let count = 0
  return function increment() {
    count++
    console.log(count)
    return count
  }
}
const incrementFn = closure()
incrementFn()
incrementFn()
incrementFn()

// The above function actually modifies 'count' so it is not pure

// Here is an example of data privacy

const dataPrivacy = function () {
  let count = 55
  return function getCounter() {
    return count
  }
}

const getCounter = dataPrivacy()

// now as a user I can't modify the count
// This is important in functional programming because we don't want to modify the state of anything

// CURRYING
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b

const curriedMultiplyBy5 = curriedMultiply(5) //  this fires off the first function and because it uses closures we don't have to run it over and over and then we can do this:

curriedMultiplyBy5(3) // 5 * 3 = 15
curriedMultiplyBy5(4) // 5 * 4 = 20
