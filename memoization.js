// We use memoization to cache the value of a function that we know will be run multiple times and give the same results.

// We do this because it can greatly improve performance if the function doesn't have to keep executiong the task

// NON Memoized way
function addToNum(num) {
  console.log("Long time..")
  return num + 80
}

// addToNum(5)
// addToNum(5)
// addToNum(5)
// Now the memoized way
const addToNum2 = (function () {
  let cache = {} // we put the cache inside the function to not pollute the global scope
  return function (num) {
    // this is also a closure
    if (num in cache) {
      console.log(`Fast ${cache[num]}`)
      return cache
    } else {
      cache[num] = num + 80
      console.log(`Slow ${cache[num]}`)
      console.log(cache)
      return cache
    }
  }
})()

// addToNum2(5)
// addToNum2(5)
// addToNum2(5)
// addToNum2(5)
// addToNum2(5)
// addToNum2(10)
// addToNum2(10)
// addToNum2(10)
// addToNum2(10)
// addToNum2(10)
// addToNum2(10)

let cache = {}

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    cache[n] = n + 80
    console.log("long time " + cache[n])
    return cache[n]
  }
}
