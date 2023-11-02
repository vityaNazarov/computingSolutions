document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector(".backdrop").classList.add("active");
	});
});

document.body.addEventListener("click", event => {
	if (event.target === document.querySelector(".backdrop")) {
		document.querySelector(".backdrop").classList.remove("active");
	}
});
