const idGenerator = require("./idGenerator")

const navID = idGenerator()

const navFactory = nav => {
	return Object.create(null, {
		"id": {value: navID.next().value, enumerable: true},
		"nav": {value: nav, enumerable: true},
		"link": {value: "#", enumerable: true},
	})
}


module.exports = navFactory
