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
