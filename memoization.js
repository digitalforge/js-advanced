// We use memoization to cache the value of a function that we know will be run multiple times and give the same results.

// We do this because it can greatly improve performance if the function doesn't have to keep executiong the task

// NON Memoized way
function addToNum(num) {
  console.log("Long time..")
  return num + 80
}

addToNum(5)
addToNum(5)
addToNum(5)
// Now the memoized way
const addToNum2 = (function () {
  let cache = {}
  return function (num) {
    if (num in cache) {
      console.log(`Fast ${cache[num]}`)
      return
    } else {
      cache[num] = num + 80
      console.log(`Slow ${cache[num]}`)
      console.log(cache)
      return cache
    }
  }
})()

addToNum2(5)
addToNum2(5)
addToNum2(5)
addToNum2(5)
addToNum2(5)
addToNum2(10)
addToNum2(10)
addToNum2(10)
addToNum2(10)
addToNum2(10)
addToNum2(10)
