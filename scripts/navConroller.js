const database = require("./databaseFactory")

const constructNav = () => {
	const navTable = database.navTable
	const headerEl = document.querySelector(".page__header")
	let headerHTML = ""
	let navBar = "<nav>"

	navTable.forEach(element => {
		navBar += `
            <a href="${element.link}" class="nav_button">
                <div class="nav_${element.nav.toLowerCase()}">${element.nav.toUpperCase()}</div>
            </a>
            `
	})

	headerHTML = `
        <span class="static_header">
            <img class="header_image" src="./images/address_icon.svg" alt="address">
            <img class="header_image" src="./images/email_icon.svg" alt="email">
            <img class="header_image" src="./images/facebook_icon.svg" alt="facebook">
            <img class="header_image" src="./images/phone_icon.svg" alt="phone">
            <img class="header_image" src="./images/twitter_icon.svg" alt="twitter">
        </span>
        <div class="jumbotron"><h1>Betsy</h1></div>
        ${navBar}
        </nav>
    `

	headerEl.innerHTML = headerHTML
}

module.exports = constructNav