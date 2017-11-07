const idGenerator = require("./idGenerator")

const reviewIdGenerator = idGenerator()

const reviewFactory = reviewArray => {
	return Object.create(null, {
		"id": {value: reviewIdGenerator.next().value, enumerable: true},
		"title": {value: reviewArray[0], enumerable: true},
		"review": {value: reviewArray[1], enumerable: true},
		"author": {value: reviewArray[2], enumerable: true},
		"stars": {value: reviewArray[3], enumerable: true}
	})
}

module.exports = reviewFactory
 