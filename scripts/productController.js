const database = require("./databaseFactory")
const displayCategories = require("./catergoryController")
const displayMoreInfo = require("./descriptionController.js")

const displayProduct = productId => {

	let productDisplay = ""
	let currentProduct = database.productsTable.find(product => product.id === productId)
    
	let productCategories = displayCategories(productId)
    
	productDisplay += `
        <section class="pblock product_${productId}">
            <div class="product_display">
                <img src="${currentProduct.image}" alt="${currentProduct.title}">
                <div class="product_info">
                    <h2>${currentProduct.title}</h2>
                    ${productCategories}
                    <p>Available Quantity : ${currentProduct.quantity} // Price : ${currentProduct.price}</p>
                    <button class="product-button__${productId}">More Info</button>
                </div>
            </div>
    `
    
	productDisplay += displayMoreInfo(productId) + "</section>"
    
	return productDisplay
}

module.exports = displayProduct