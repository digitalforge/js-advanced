const user = {
  name: "Kim",
  isActive: true,
  cart: [],
  purchases: [],
}

let amazonHistory = []

const pipe =
  (prev, curr) =>
  (...args) =>
    curr(prev(...args))

const compose =
  (prev, curr) =>
  (...args) =>
    prev(curr(...args))

purchaseItems(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyCart
)(user, {
  name: "Laptop",
  price: 3000,
})

purchaseItems2(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {
  name: "Laptop",
  price: 3000,
})

function purchaseItems(...fns) {
  return fns.reduce(pipe)
}

function purchaseItems2(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  amazonHistory.push(user)
  console.log(amazonHistory)
  const { cart } = user
  const updateCart = cart.concat(item)
  const updatedCart = Object.assign({}, user, { cart: updateCart })

  return updatedCart
}

function applyTaxToItems(user) {
  amazonHistory.push(user)
  const { cart } = user
  const taxRate = 0.06
  const updateCart = cart.map((item) => {
    return {
      name: item.name,
      price: (item.price += item.price * taxRate),
    }
  })
  const updatedCart = Object.assign({}, user, { cart: updateCart })
  return updatedCart
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}
