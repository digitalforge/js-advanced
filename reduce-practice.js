// const people = [
//   {
//     name: "Jon Doucette",
//     age: 42,
//     gender: "He",
//   },
//   {
//     name: "Jake White",
//     age: 34,
//     gender: "He",
//   },
//   {
//     name: "Tim Richards",
//     age: 27,
//     gender: "He",
//   },
//   {
//     name: "Justine Grover",
//     age: 55,
//     gender: "She",
//   },
// ]

// // get the oldest person using reduce

// const oldest = people.reduce((p, c) => {
//   return p > c.age ? p : c.age
// }, 0)

// console.log(oldest)

// const getGirls = people.reduce((p, c) => {
//   return p === "She" ? p : c
// }, "")

// console.log(getGirls)

// count occurrences of each string in an array
const colors = ["green", "green", "red", "blue", "red", "red"]

const colorCount = colors.reduce((prev, curr) => {
  console.log(prev)
  prev[curr] = (prev[curr] || 0) + 1

  return prev
}, {})

console.log(colorCount)
