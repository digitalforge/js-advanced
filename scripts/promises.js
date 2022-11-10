// promises
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
]

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json())
//   })
// )
//   .then((results) => {
//     console.log(results)
//   })
//   .catch(() => console.log("error"))
//   .finally(() => console.log("extra")) // finally will be called whether the promise resovles or rejects

// for await of

const getData = async () => {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    )
    console.log(users)
    console.log(posts)
    console.log(albums)
  } catch (err) {
    console.log(err.message)
  }
}

//getData()

const loopThroughUrls = (urls) => {
  for (url of urls) {
    console.log(url)
  }
}

//loopThroughUrls(urls)

const getData2 = async () => {
  const arrayOfPromises = urls.map((url) => fetch(url))
  for await (let request of arrayOfPromises) {
    const data = await request.json()
    console.log(data)
  }
}

//getData2()

const getData3 = async () => {
  const fetchArrays = urls.map((url) => fetch(url))
  const results = []
  for await (item of fetchArrays) {
    const data = await item.json()
    results.push(data)
  }
  const [users, posts, albums] = results
  console.log(users, posts, albums)
}

//getData3()

/**************** Parallel - Sequence - Race ******************/

/* DELAY - this is for testing purposes */
const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay))

const a = () => promisify("a", 100)
const b = () => promisify("b", 5000)
const c = () => promisify("c", 3000)

//a()
//b()
//c()

/* PARALLEL - All at the same time */
async function parallel() {
  const promises = [a(), b(), c()]
  const [output1, output2, output3] = await Promise.all(promises)
  return `parallel is done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)

/* RACE - whatever finishes first */
async function race() {
  const promises = [a(), b(), c()]
  const output1 = await Promise.race(promises)
  return `race is done: ${output1}`
}
race().then(console.log)

/* SEQUENCE - in order */
async function sequence() {
  const output1 = await a()
  const output2 = await b()
  const output3 = await c()
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
