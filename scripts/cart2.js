// Implement a cart feature

//1. Add Items to cart
//2. Add 3% tax to item
//3. buy item: cart --> purcahses
//4. Empty cart

const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
}

let amazonHistory = []

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args))

purchaseItem(
  emptyCart,
  buyItem,
  applyTax,
  addToCart
)(user, { name: "laptop", price: 2000 })

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addToCart(user, item) {
  amazonHistory.push(user)
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updatedCart })
}

function applyTax(user) {
  amazonHistory.push(user)
  const { cart } = user // this is destructuring - it pulls the 'cart' array from user and puts it in a 'cart' variable
  const taxRate = 1.3
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    }
  })
  return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}

var globalsecret = "1234"
var fight = "punch"

var script2 = (function (globalsecret) {
  globalsecret = 0
})(globalsecret)
