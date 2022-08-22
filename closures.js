// let view
// function initialize() {
//   let called = 0
//   return function () {
//     if (called > 0) {
//       return
//     } else {
//       view = "mountain"
//       called++
//       console.log("view has been set!")
//     }
//   }
// }

// const startOnce = initialize()
// initialize()()

// console.log(view)

// let view
// function initialize() {
//   let called = 0
//   const startView = () => {
//     if (called > 0) {
//       return
//     } else {
//       view = "mountain"
//       called++
//       console.log("view created!")
//     }
//   }

//   return {
//     startView,
//   }
// }

// const startOnce = initialize()
// startOnce.startView()
// startOnce.startView()
// startOnce.startView()

// console.log(view)

// const array = [1, 2, 3, 4]
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at Index " + array[i])
//   }, 3000)
// }

// function grandpa() {
//   let grandpa = "grandpa"
//   return function father() {
//     let father = "father"
//     return function son() {
//       let son = "son"
//       return `${grandpa} > ${father} > ${son}`
//     }
//   }
// }

// const array = [1, 2, 3, 4]
// for (var i = 0; i < array.length; i++) {
//   ;(function (i) {
//     setTimeout(function () {
//       console.log("i am index " + array[i])
//     }, 3000)
//   })(i)
// }
