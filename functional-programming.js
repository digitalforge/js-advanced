// Amazon shopping
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
}

let cartButtons = Array.from(document.getElementsByClassName("add-to-cart"))
let cartCount = document.querySelector(".cart-count")

cartButtons.forEach(function (button) {
  let product = button.getAttribute("data-item")
  button.addEventListener("click", function () {
    console.log(this)
    addToCart(product)
  })
})

function addToCart(product) {
  user.cart.push(product)
  cartCount.innerText = user.cart.length
  console.log(user.cart)
}
