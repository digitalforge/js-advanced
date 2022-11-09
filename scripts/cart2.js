// Amazon cart
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

const purachse = purchaseItem(
  emptyCart,
  buyItem,
  applyTax,
  addToCart
)(user, { name: "laptop", price: 2000 })

console.log(purachse)

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

function applyTax(user) {
  amazonHistory.push(user)
  const { cart } = user
  const taxRate = 1.3
  const updateCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    }
  })
  return Object.assign({}, user, { cart: updateCart })
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}

function refundItem(user) {}

console.log(amazonHistory)
