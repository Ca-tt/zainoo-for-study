const $ = require("jquery");

// good example of cart functionality
// https://codepen.io/chrisachinga/pen/MWwrZLJ

let cart = {
	// cart triggers
	trigger: $(".cart-trigger"),

	// cart elements
	background: $(".cart .background"),
	modal: $(".cart .modal"),
	closeButton: $(".cart .close"),

	// animations
	animationStart: $(".animate__fadeInDown"),
	animationEnd: $(".animate__fadeInUp"),
	// or you can use "slide" animation

	open: function () {
		console.log("open function");
		this.background.addClass("is-fadeIn is-visible");
	},

	close: function () {
		background = this.background;

		console.log("close function");
		background.removeClass("is-fadeIn");
		background.addClass("is-fadeOut");

		setTimeout(function () {
			background.removeClass("is-visible");
		}, 1300);
	},
};

cart.trigger.click(function () {
	cart.open();
});

cart.background.click(function () {
	cart.close();
});
