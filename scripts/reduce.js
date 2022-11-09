// Reduce method Here we freakin' go
// reduce takes two arguments - previous and current and fires a callback function ( which we can custom write ) to reduce the array to one value

let vals = [5, 4, 9, 12, 1, 2]

let sum = vals.reduce((p, c) => {
  //console.log(`Previous Value: ${p}`)
  //console.log(`Current Value: ${c}`)

  return p + c
}, 0)

//console.log(sum)

let users = [
  {
    name: "Jon Doucette",
    age: 31,
  },
  {
    name: "Chim Richalds",
    age: 33,
  },
  {
    name: "Joe Schmoe",
    age: 26,
  },
  {
    name: "Jessica Weedle",
    age: 42,
  },
]

let oldest = users.reduce((p, c) => {
  return c.age > p ? c.age : p
}, 0)

console.log(oldest)

let firstLast = users.reduce((p, c, i, a) => {
  console.log(`Previous item in array: ${p}`)
  const split = c.name.split(" ")
  let initials = `${split[0][0]}${split[1][0]}`

  if (i === a.length - 1) {
    initials += "."
  } else {
    initials += ","
  }

  return p + initials
}, "")

// let maxVal = vals.reduce((p, c) => (c > p ? c : p))
//} let minVal = vals.reduce((p, c) => (c < p ? c : p))
// let sumVal = vals.reduce((p, c) => p + c)

// console.log(maxVal)
// console.log(minVal)
// console.log(sumVal)

// sum of all numbers in an array

const numbers = [2, 7, 3, 8]

const results = numbers.reduce((p, c) => {
  return p + c
}, 0)

console.log(results)

// find sum of all materials required to build a house
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

const results2 = materials.reduce((prev, material) => {
  return prev + material.cost
}, 0)

console.log(results2)

// convert a two-dimensinal array of key-value pairs into an object

const keyValuePairs = [
  ["username", "dcode"],
  ["memberSince", "2020-04-06"],
  ["age", 35],
]

const result3 = keyValuePairs.reduce((prev, keyValuePair) => {
  const key = keyValuePair[0]
  const value = keyValuePair[1]

  prev[key] = value

  return prev
}, {})

console.log(result3)

// find the max of min salary of a list of people object

const people = [
  {
    name: "Dom",
    occupation: "Software Developer",
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
    salary: 175000,
  },
]

const highestSalary = people.reduce((prev, curr) => {
  return prev > curr.salary ? prev : curr.salary
}, 0)

console.log(highestSalary)

// count occurrences of each string in an array
const colors = ["green", "green", "red", "blue", "red", "red"]

const colorCount = colors.reduce((prev, color) => {
  prev[color] = (prev[color] || 0) + 1

  return prev
}, {})

console.log(colorCount)
