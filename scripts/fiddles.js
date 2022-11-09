// const buttons = document.getElementsByTagName("a")
// for (const item in buttons) {
//   if (Object.hasOwnProperty.call(buttons, item)) {
//     const element = buttons[item]
//     element.onclick = handleClick(element.id)
//   }
// }
// function handleClick(size) {
//   return function () {
//     console.log(this)
//   }
// }

// const buttons = document.getElementsByTagName("a")
// for (const item in buttons) {
//   const element = buttons[item]
//   element.onclick = handleClick(element.id)
// }

// function handleClick(size) {
//   return function () {
//     this.style.transition = "all .3s"
//     this.style.fontSize = `${size}px`
//   }
// }

// function callMeMaybe() {
//   setTimeout(function () {
//     console.log(callMe)
//   }, 4000)

//   const callMe = "Hi I am now here!"
// }

// callMeMaybe()

// //benefits of closures
// // Memory Efficiant
// function heavyDuty(index) {
//   const bigArray = new Array(7000).fill("happy")
//   console.log("created")
// }

// heavyDuty(688)
// heavyDuty(688)
// heavyDuty(688)

// const getHeavyDuty = heavyDuty2()

// getHeavyDuty(688)
// getHeavyDuty(700)
// getHeavyDuty(800)

// function heavyDuty2() {
//   const bigArray = new Array(7000).fill("happy")
//   console.log("created again")
//   return function (index) {
//     console.log(bigArray[index])
//   }
// }

// Encapsulation
const makeNuclearButton = () => {
  let timeWithoutDescruction = 0
  const passTime = () => timeWithoutDescruction++
  const totalPeaceTime = () => timeWithoutDescruction
  const launch = () => {
    timeWithoutDescruction = -1
    return "Boom!"
  }

  setInterval(passTime, 1000)

  return {
    totalPeaceTime: totalPeaceTime,
  }
}

const fireBomb = makeNuclearButton()

//EXERSIZE for CLOSURES
let view

const init = function () {}

// const init = (function() {
//   let count = 0
//   return () => {
//     if (count > 0) {
//       console.log("You aleady created a view")
//       return
//     } else {
//       count++
//       view = "View"
//       console.log("The view has been created")
//     }
//   }
// })()

// init()
// init()
// init()

// const start = initialize()
// start()
// start()
// start()

// const array = [1, 2, 3, 4]

// for (var i = 0; i < array.length; i++) {
//   ;(function (i) {
//     setTimeout(function (item) {
//       console.log("I am at index " + i)
//     }, 2000)
//   })(i)
// }
