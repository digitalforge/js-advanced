// find the sum of all numbesr in array
const numbers = [2, 7, 8, 9, 3]

const results = numbers.reduce((prev, curr) => {
  return prev + curr
}, 0)

// find the sum of all materials required to build a house
const materials = [
  {
    name: "Brick",
    cost: 30000,
  },
  {
    name: "Plaster",
    cost: 24000,
  },
  {
    name: "Wood",
    cost: 50000,
  },
]

const getTotalCost = materials.reduce((prev, curr) => {
  return prev + curr.cost
}, 0)

console.log(getTotalCost)

// Convert two dimentional array of key-value pairs into an object
const keyValuePairs = [
  ["username", "digitalforge"],
  ["memberSince", "2020-04-06"],
  ["age", 35],
]

const newObj = keyValuePairs.reduce((prev, curr) => {
  const key = curr[0]
  const value = curr[1]

  prev[key] = value

  return prev
}, {}) // note we put an empty object as the prev value because we are going to add to it

console.log(newObj)

// find the max or min salary of a list of people object
const people = [
  {
    name: "Jon",
    occupation: "Web Developer",
    salary: 90000,
  },
  {
    name: "Max",
    occupation: "Mechanic",
    salary: 150000,
  },
  {
    name: "Beth",
    occupation: "Teacher",
    salary: 75000,
  },
]

const highestSalary = people.reduce((prev, curr) => {
  if (curr.salary > prev) {
    return curr.salary
  }

  return prev
}, 0)

console.log(highestSalary)

// count occurrences of eachs tring in an array
const colors = ["green", "green", "red", "blue", "red", "red"]

const colorNumbers = colors.reduce((prev, color) => {
  prev[color] = (prev[color] || 0) + 1

  return prev
}, {})

console.log(colorNumbers)
