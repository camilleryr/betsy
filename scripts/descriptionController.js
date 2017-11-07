const database = require("./databaseFactory")
const displayReviews = require("./reviewController")


const displayMoreInfo = productId => {
	const currentProduct = database.productsTable.find(element => element.id === productId)
	const reviews = displayReviews(productId)

	let displayEl = `
        <div class="moreInfo product-moreInfo__${productId} hidden">
            <h3>${currentProduct.description}</h3>
            ${reviews}
        </div>
        `
	return displayEl
}

module.exports = displayMoreInfo
