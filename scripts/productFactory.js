const idGenerator = require("./idGenerator")

const productIdGenerator = idGenerator()

const productFactory = productArray => {
	return Object.create(null, {
		"id": {value: productIdGenerator.next().value, enumerable: true},
		"title": {value: productArray[0], enumerable: true},
		"description": {value: productArray[1], enumerable: true},
		"price": {value: productArray[2], enumerable: true},
		"quantity": {value: productArray[3], enumerable: true},
		"image": {value: productArray[4], enumerable: true},
	})
}

module.exports = productFactory
