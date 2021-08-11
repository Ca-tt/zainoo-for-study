const $ = require('jquery');

let scrollButton = $(".scroll-down");
// fix for not working with body
let body = $("html, body");

scrollButton.click(function (e) {
	// stop from default click action
	e.preventDefault();
	body.animate(
		{
			// special non-style property
			scrollTop: 0,
		},
		500,
		"linear"
	);
});
