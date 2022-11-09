// async function fetchUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await res.json()
//     console.log(data)
//   } catch (err) {
//     console.log(err.message)
//   }
// }

// //fetchUsers()

// // promises
// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ]

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json())
//   })
// )
//   .then((results) => console.log(results))
//   .catch(() => console.log("error"))

// const getData = async () => {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((resp) => resp.json()))
//     )
//     console.log(users)
//     console.log(posts)
//     console.log(albums)
//   } catch (err) {
//     console.log(err.message)
//   }
// }

// getData()

// Promises raw
let promise = new Promise(function (resolve, reject) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      resolve(res.json())
    })
    .catch((err) => {
      reject(err)
    })
})

promise
  .then(function (response) {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
