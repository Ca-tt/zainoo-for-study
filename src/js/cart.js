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

		// get data from product description
		let productData = {
			image: $('.slide-item img').clone(),
			title: $(".product-info .title").text(),
			price: $(".product-info .price").text(),
		}

		// prep cells for data placement
		let dataPlacement = {
			image: $(".modal .img"),
			title: $(".modal .title"),
			price: $(".modal .price"),
		};

		// paste data


		dataPlacement.image.html(productData.image);
		dataPlacement.title.text(productData.title);
		dataPlacement.price.text(productData.price);
		
	},

	// count items, utilize "+" and "-" signs
	counter: function() {
		
		let plusSign = $('.modal .fa-plus');
		let minusSign = $('.modal .fa-minus');
		let quantity = $('.modal .quantity');
		let itemsCount = parseInt($(".modal .quantity").text(), 10);
		let priceHolder = $('.modal .total-price');
		let price = parseInt($(".modal .total-price").text(), 10);
		
		if (plusSign.on('click', function () {
			itemsCount++;
			quantity.text(itemsCount);
			

			totalPrice = itemsCount * price;

			priceHolder.text(totalPrice);

		}));
		if (minusSign.on("click", function () {
			if (itemsCount > 0) {
				itemsCount--;
				quantity.text(itemsCount);
				
				totalPrice = itemsCount * price;

				priceHolder.text(totalPrice);
				}
			})
		);


	}

};

cart.trigger.on('click', function () {
	cart.open();
});

cart.background.on('click', function () {
	// cart.close();
});

// cart.addContent();
cart.counter();