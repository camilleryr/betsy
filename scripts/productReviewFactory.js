const idGenerator = require("./idGenerator")

const productReviewID = idGenerator()

const productReviewFactory = productReviewArray => {
	return Object.create(null, {
		"id": {value: productReviewID.next().value, enumerable: true},
		"productID": {value: productReviewArray[0], enumerable: true},
		"reviewID": {value: productReviewArray[1], enumerable: true}
	})
}


module.exports = productReviewFactory
