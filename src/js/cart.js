const $ = require("jquery");

// TODO: check
// good example of cart functionality
// https://codepen.io/chrisachinga/pen/MWwrZLJ

let cart = {
	// cart triggers
	trigger: $(".cart-trigger"),

	// cart elements
	background: $(".cart.background"),
	modal: $(".cart .modal"),
	closeButton: $(".cart .close"),

	// animations
	// Todo: apply variables to "open" and "close" functions
	animationStart: $(".is-fadeIn"),
	animationEnd: $(".is-fadeOut"),
	// or use "slide" animation

	open: function () {
		// console.log("open function");
		this.background.addClass("is-fadeIn is-visible");
	},

	close: function () {
		background = this.background;

		// console.log("close function");
		background.removeClass("is-fadeIn");
		background.addClass("is-fadeOut");

		setTimeout(function () {
			background.removeClass("is-visible");
		}, 1300);
	},

	addContent: function () {

		let productData = {
			// imageSrc: $('.slide-item img').attr('src'),
			image: $('.slide-item img').clone(),
			title: $(".product-info .title").text(),
			price: $(".product-info .price").text(),
		}

		console.log(productData);

		let dataPlacement = {
			image: $(".modal .img img"),
			title: $(".modal .title"),
			price: $(".modal .price"),
		};

		// dataPlacement.image.attr("src", productData.imageSrc);
		dataPlacement.image.html(productData.image);


	}
};

cart.trigger.on('click', function () {
	cart.open();
});

cart.background.on('click', function () {
	cart.close();
});

cart.addContent();