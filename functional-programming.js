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

// Closure - a method of containing some sort of state

const closure = function () {
  let count = 0
  return function increment() {
    count++
    return count
  }
}
const incrementFn = closure()

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
