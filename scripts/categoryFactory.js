const idGenerator = require("./idGenerator")

const categoryID = idGenerator()

const categoryFactory = categoryName => {
	return Object.create(null, {
		"id": {value: categoryID.next().value, enumerable: true},
		"categoryName": {value: categoryName, enumerable: true},
	})
}


module.exports = categoryFactory
