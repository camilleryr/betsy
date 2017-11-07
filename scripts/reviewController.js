const database = require("./databaseFactory")

let productsReviewsTable = database.productsReviewsTable
let reviewTable = database.reviewTable

const reviewController = productId => {
	let reviewHTML = ""
    
	let productReviewItems = productsReviewsTable.filter(element => element.productID === productId)
    
	let reviewIdArray = []
	productReviewItems.forEach(element => reviewIdArray.push(element.reviewID))
    
	let reviewsForDisplay = []
	reviewIdArray.forEach(element => {
		reviewsForDisplay.push(reviewTable.find(Review => Review.id === element))
	})
    
	reviewsForDisplay.forEach(element => {
		let star = "&bigstar;".repeat(element.stars)
		reviewHTML += `
            <div class="review">
                <h3>${element.title}</h3>
                <p>${element.author}</p>
                <h4>${element.review}</h4>
                <p>${star}</p>
            </div>`
	})

	return reviewHTML
}

module.exports = reviewController
