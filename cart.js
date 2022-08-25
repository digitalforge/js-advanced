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
    addToCart(product, button)
  })
})

function addToCart(product, button) {
  user.cart.push(product)
  cartCount.innerText = user.cart.length
  button.innerText = "Remove From Cart"
  button.classList.remove("add-to-cart")
  button.classList.add("remove-from-cart")
  console.log(user.cart)
}
