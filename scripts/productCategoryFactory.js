const idGenerator = require("./idGenerator")

const productCategoryId = idGenerator()

const productCategoryFactory = productCategoryArray => {
	return Object.create(null, {
		"id": {value: productCategoryId.next().value, enumerable: true},
		"productID": {value: productCategoryArray[0], enumerable: true},
		"categoryID": {value: productCategoryArray[1], enumerable: true}
	})
}


module.exports = productCategoryFactory
