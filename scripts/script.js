//inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}
const userData = {
  fistName: "Johnson",
  lastName: "Junior",
}

findUser(userData)

//hidden classes

function Animal(x, y) {
  this.x = x
  this.y = y
}

const obj1 = new Animal(1, 2)
const obj2 = new Animal(3, 4)

// Call stack + Memory Heap

function subtractTwo(num) {
  return num - 2
}

function calculate() {
  const sumTotal = 4 + 5
  return subtractTwo(sumTotal)
}

calculate()
