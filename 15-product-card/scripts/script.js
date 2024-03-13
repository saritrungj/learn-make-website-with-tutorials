const productImage = document.getElementById('product-image')
const productLimited = document.getElementById('product-limited')
const productName = document.getElementById('product-name')
const productYears = document.getElementById('product-years')
const productPrice = document.getElementById('product-price')
const blackPicker = document.getElementById('black-color')
const greyPicker = document.getElementById('grey-color')
const brownPicker = document.getElementById('brown-color')


blackPicker.addEventListener('click', () => {
  productImage.src = '../images/nike-black.png'
  productName.textContent = 'Sneaker Nike Black'
  productYears.textContent = '2023'
  productPrice.textContent = '$38.39'
  productLimited.style.display = 'none'
})

greyPicker.addEventListener('click', () => {
  productImage.src = '../images/nike-white.png'
  productName.textContent = 'Sneaker Nike White'
  productYears.textContent = '2024'
  productPrice.textContent = '$48.39'
  productLimited.style.display = 'none'
})

brownPicker.addEventListener('click', () => {
  productImage.src = '../images/nike-brown.png'
  productName.textContent = 'Sneaker Nike Brown'
  productYears.textContent = '2025'
  productPrice.textContent = '$58.39'
  productLimited.style.display = 'block'
})