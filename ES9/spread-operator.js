// Object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
  elephant: 54,
  cheeta: 15,
}

function objectSpread(p1, p2, p3, p4) {
  console.log(p1)
  console.log(p2)
  console.log(p3)
  console.log(p4)
}

const { tiger, lion, monkey, ...rest } = animals

objectSpread(tiger, lion, monkey, rest)
