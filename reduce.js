// Reduce method Here we freakin' go
// reduce takes two arguments - accumulator and currentvalue

let vals = [5, 4, 9, 12, 1, 2]

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

let sum = vals.reduce((p, c) => {
  console.log(`Previous Value: ${p}`)
  console.log(`Current Value: ${c}`)

  return p + c
}, 0)

console.log(sum)

let oldest = users.reduce((p, c) => {
  console.log(p)
  return c.age > p ? c : p
}, 0)

console.log(oldest)

// let maxVal = vals.reduce((p, c) => (c > p ? c : p))
//} let minVal = vals.reduce((p, c) => (c < p ? c : p))
// let sumVal = vals.reduce((p, c) => p + c)

// console.log(maxVal)
// console.log(minVal)
// console.log(sumVal)
