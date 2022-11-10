// promises
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
]

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json())
  })
)
  .then((results) => {
    console.log(results)
  })
  .catch(() => console.log("error"))
  .finally(() => console.log("extra")) // finally will be called whether the promise resovles or rejects

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
  //.map() method returns a NEW array with the results of calling a provided function on every element in this array.
  const fetchRequests = urls.map((url) => fetch(url))

  for await (request of fetchRequests) {
    const data = await request.json()
    console.log(data)
  }
}

//getData3()
