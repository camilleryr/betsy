document.querySelector(".productDisplay").addEventListener("click", event => {
	if (event.target.className.startsWith("product-button")) {
		let elId = event.target.className.split("__")[1]
		document.querySelector(`.product-moreInfo__${elId}`).classList.toggle("hidden")
	}
})