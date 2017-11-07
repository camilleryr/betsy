const database = require("./databaseFactory")
const displayProducts = require("./productController")

const products = database.productsTable

let displayProductsHTML = ""

products.forEach(element => {
	displayProductsHTML += displayProducts(element.id)
})

module.exports = displayProductsHTML