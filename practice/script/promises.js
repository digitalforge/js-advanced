// This is what I want you to do. First write a function that accepts and item and a delay nad returns a promise that's resolved at the delay

// then run them in parallel
// then race them so the fastest gets in first
// then run them in sequence

const promiseDelay = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay))

const a = () => promiseDelay("a", 1600)
const b = () => promiseDelay("b", 1200)
const c = () => promiseDelay("c", 900)

const gatherPromises = (...promises) => [...promises]

a().then(console.log)
b().then(console.log)
c().then(console.log)

// parallel
async function parallel() {
  const promises = gatherPromises(a(), b())
  const [res1, res2] = await Promise.all(promises)
  return `This is the parallel sequence ${res1} ${res2}`
}

parallel().then(console.log)

//race

async function race() {
  const promises = [a(), b(), c()]
}
