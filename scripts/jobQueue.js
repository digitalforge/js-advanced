//Callback Queue
setTimeout(() => {
  console.log("1", "is the lonliest number")
}, 0)

setTimeout(() => {
  console.log("2", "can be as bad as one")
}, 10)

//2 Job Queue or Microtask Queue - the job queue has higher priorty than the callback queue
Promise.resolve("hi").then((data) => console.log(data))

//3
console.log("3", "is a crowd")

// The console would look like this
// 3 is a crowd
// 2 hi
// 1 is the lonliest number
// 2 can be as bad as 1
