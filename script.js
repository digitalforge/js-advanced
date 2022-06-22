//inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}
const userData = {
  fistName: "Johnson",
  lastName: "Junior",
}

finderUser(userData)

//hidden classes

function Animal(x, y) {
  this.x = x
  this.y = y
}

const obj1 = new animal(1, 2)
const obj2 = new animal(3, 4)

// Call stack + Memory Heap
const number = 610 //allocate memory for number
