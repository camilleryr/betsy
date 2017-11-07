const database = require("./databaseFactory")

let productsCategoryTable = database.productsCategoryTable
let categoryTable = database.categoryTable


const displayCategories = productID => {

	let categoryHTML = ""
    
	let productCategoryItems = productsCategoryTable.filter(element => element.productID === productID)
    
	let categoryIdArray = []
	productCategoryItems.forEach(element => categoryIdArray.push(element.categoryID))
    
	let categoriesForDisplay = []
	categoryIdArray.forEach(element => {
		categoriesForDisplay.push(categoryTable.find(category => category.id === element))
	})

	categoriesForDisplay.forEach(element => {
		categoryHTML += `<div class="category">${element.categoryName}</div>`
	})

	return categoryHTML
}

module.exports = displayCategories