console.log("Lets make some shit")

const database = require("./databaseFactory")
const constructNav = require("./navConroller")
const displayProductsHTML = require("./displayProductsController")

constructNav()
document.querySelector(".productDisplay").innerHTML = displayProductsHTML
console.log(database)