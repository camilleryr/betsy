// build 5 tables and compile into database object

const productFactory = require("./productFactory")
const reviewFactory = require("./reviewFactory")
const categoryFactory = require("./categoryFactory")
const productReviewFactory = require("./productReviewFactory")
const productCategoryFactory = require("./productCategoryFactory")

const productsTable = []
const reviewTable = []
const categoryTable = []
const productsReviewsTable = []
const productsCategoryTable = []

//Build Product Table
productsTable.push(productFactory([
	"Bosch ROS20VSK 120-Volt Variable Speed Random Orbit Sander Kit",
	"The Bosch ROS20VSK 5-inch Random Orbit Sander/Polisher delivers thorough results, so woodworkers, carpenters and furniture refinishers get the precision they demand. The tool conveys an outstanding combination of pad orbit and rotation for fast removal and an ultra-smooth finish. Built with an integral pad dampening braking system to diminish swirl marks, this sander is a variable-speed model to match the speed to the task. It includes a built-in microfilter system that traps particles as small as 1/2 micron in diameter.",
	"$79.00",
	"56",
	"https://images-na.ssl-images-amazon.com/images/I/41yslewo9ZL.jpg"
]))
productsTable.push(productFactory([
	"Trump Ride Along Piggyback President Presidential Funny Costume",
	"If you're looking for a 'YUGE' costume, this is the best costume ever. Believe me. There is nothing better than this ride on piggyback president costume. Okay? Whether it is presidential rallies, parades, or election year, you'll know that you have America's President Trump carrying you around. One size fits most. Includes pants made to resemble the body of the President and vinyl head. This is great on its own, but could be even better with the other costumes and accessories available in our store!",
	"$60.99",
	"1",
	"https://images-na.ssl-images-amazon.com/images/I/71nt6o6JAPL._UL1500_.jpg"
]))
productsTable.push(productFactory([
	"Lottie's Traditional Barbados Hot Sauce (Yellow) 6 oz.",
	"Ingredients: water, mustard seed, vinegar, onion, habanero, sugar, salt, spices (including turmeric)",
	" $21.90",
	"387",
	"https://images-na.ssl-images-amazon.com/images/I/61ZZdOn4PjL._SY679_.jpg"
]))

//Build Review Table
reviewTable.push(reviewFactory([
	"5.0 out of 5 starsEveryone loved it from the private house party to winning $200",
	"This costume was a huge hit! Everyone loved it from the private house party to winning $200. at costume contest.",
	"Real Person",
	5
]))

reviewTable.push(reviewFactory([
	"I instantly fell in love with this and I knew this was the one",
	"As a regular Amazon customer I came here looking for a costume for a dress-up-party. I instantly fell in love with this and I knew this was the one. I expected a small package to contain the costume but what actually came was Donald Trump himself.... He asked 'would you like a piggyback ride'. I summoned up all my strength and the only words to stumble out my mouth were 'yes'. We rode into the sunset singing the national anthem.<br><br>I only give a 3/5 because he beat me in the election.",
	"Hillary Clinton",
	3
]))

reviewTable.push(reviewFactory([
	"Austin vice DIY crucifix snackwave subway tile.",
	"Jean shorts selvage fam, jianbing hot chicken lyft cold-pressed hexagon. Cornhole banjo subway tile live-edge brunch kogi vegan XOXO aesthetic, synth forage hell of fixie. Sriracha chillwave bicycle rights banjo gluten-free, migas pinterest vaporware heirloom put a bird on it cardigan tacos listicle mustache stumptown.",
	"Hipster",
	1
]))

reviewTable.push(reviewFactory([
	"Works GREAT but the dust collector seems to be more of ...",
	"Works GREAT but the dust collector seems to be more of a novelty then collecting a lot of dust. It works, you would just think it would work better. The sander itself is GREAT! Just give yourself plenty of ventilation or you will have sawdust everywhere.",
	"Ashell",
	4
]))

reviewTable.push(reviewFactory([
	"So far, really nice.",
	"Sander works well so far. I have only tried it hooked up to my shop vac, and not with the included dust catcher/filter.",
	"Will Magri",
	2
]))

reviewTable.push(reviewFactory([
	"A ROS that reallly works",
	"After reading a number of reviews I decided to give the Bosch ROS20VSK a try. The sander arrived in a timely manner and came in it's own molded plastic carrying case. After a few weeks of using the sander I find it to be very comfortable to use. Dust collection is adequate with the attached collection bag but I find using it with an external shop vac makes using it a virtually dust free operation. I would recommend using a smaller shop vac as attaching it to my large and much more powerful vac seemed to cause it to suck down to the board and inhibit the random orbit function. I use the sander two or three times a week in my home woodworking shop and find there is minimal vibration, a real change from my now retired my twenty five year old Craftsman sander. Hopefully this unit will last as long as the Craftsman did, time will tell. As for now I would recommend this as buy.",
	"A. Spencer",
	5
]))


reviewTable.push(reviewFactory([
	"3.0 out of 5 starsAll in all it seems more like a spicy mustard than a hot sauce",
	"I have only tasted this and not used in a recipe yet so my mind may change on it. All in all it seems more like a spicy mustard than a hot sauce, but I'm sure I can find something to cook it with that will pair it nicely.",
	"JOJOMA",
	3
]))

reviewTable.push(reviewFactory([
	"Tasty and not too hot",
	"Super tasty on chicken, pretzels, fries and chips. This is a hot mustard based sauce that has an almost creamy taste. It's not particularly hot- I'm guessing < 5000 Scoville.",
	"GoBlue9123",
	4
]))

reviewTable.push(reviewFactory([
	"Excellent mustard flavor",
	"Excellent mustard flavor. The heat from chili peppers is just perfect complementing the mustard. This instantly became one of my favorite sauces. Heat level is not insane and I like like it as I can use enough of this sauce to really get the flavor going on. This sauce is spot on! There isn't any off flavors in this sauce, it's all Great mustard+chili.<br><br>Take a piece of french baguette, lottie's sauce, turkey and ham and it's quite the perfect simple sandwich.",
	"John Sullivan",
	2
]))

// Build Category Table
categoryTable.push(categoryFactory("Grocery"))
categoryTable.push(categoryFactory("Condiment"))
categoryTable.push(categoryFactory("Tool"))
categoryTable.push(categoryFactory("Power Tool"))
categoryTable.push(categoryFactory("Sander"))
categoryTable.push(categoryFactory("Novelty Item"))
categoryTable.push(categoryFactory("Costume"))

//Build product-review table
productsReviewsTable.push(productReviewFactory([2, 1]))
productsReviewsTable.push(productReviewFactory([2, 2]))
productsReviewsTable.push(productReviewFactory([2, 3]))
productsReviewsTable.push(productReviewFactory([2, 3]))
productsReviewsTable.push(productReviewFactory([1, 4]))
productsReviewsTable.push(productReviewFactory([1, 5]))
productsReviewsTable.push(productReviewFactory([1, 6]))
productsReviewsTable.push(productReviewFactory([3, 7]))
productsReviewsTable.push(productReviewFactory([3, 8]))
productsReviewsTable.push(productReviewFactory([3, 9]))

//Build productsReviewTable
productsCategoryTable.push(productCategoryFactory([1, 3]))
productsCategoryTable.push(productCategoryFactory([1, 4]))
productsCategoryTable.push(productCategoryFactory([1, 5]))
productsCategoryTable.push(productCategoryFactory([2, 6]))
productsCategoryTable.push(productCategoryFactory([2, 7]))
productsCategoryTable.push(productCategoryFactory([3, 1]))
productsCategoryTable.push(productCategoryFactory([3, 2]))

//Build database
const database = {
	"productsTable": productsTable,
	"reviewTable": reviewTable,
	"categoryTable": categoryTable,
	"productsReviewsTable": productsReviewsTable,
	"productsCategoryTable": productsCategoryTable,
}

module.exports = database
