const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

//ES6 Promise.all() - this throws an error when one or more of the promises is rejected
Promise.all([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log("something failed", e)) // this will log 'something failed, undefined'

// .allSettled() - even if one of the promises reject it ignores it
Promise.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log("something failed", e)) // this will log an array or promises with one status as rejected

// ES2021

// Where does the webapi put the tasks so they are non-blocking?
