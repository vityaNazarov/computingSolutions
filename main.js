// MOBILE BACKDROP
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

// SEND-MAIL-BACKDROP

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("send-mail-btn").addEventListener("click", function () {
		document.querySelector(".send-mail-backdrop").classList.add("active");
	});
});

document.body.addEventListener("click", event => {
	if (event.target === document.querySelector(".send-mail-backdrop")) {
		document.querySelector(".send-mail-backdrop").classList.remove("active");
	}
});

document.getElementById("modal-close").addEventListener("click", function () {
	document.querySelector(".send-mail-backdrop").classList.remove("active");
});

// SERVICES
// READ MORE

function readMore(btn) {
	let post = btn.parentElement;
	console.log(post);

	if (post.querySelector(".service-dots").style.display === "none") {
		post.querySelector(".service-dots").style.display = "block";
		post.querySelector(".service-info-text-more").style.display = "none";
		post.querySelector(".service-info-text-secondary").style.display = "none";
		post.querySelector(".sevice-list-more").style.display = "none";
		post.querySelector(".service-btn-text").innerHTML = "Learn more";
		post.querySelector(".service-btn-svg").style.transform = "rotate(0deg)";
	} else {
		post.querySelector(".service-dots").style.display = "none";
		post.querySelector(".service-info-text-more").style.display = "block";
		post.querySelector(".service-info-text-secondary").style.display = "block";
		post.querySelector(".sevice-list-more").style.display = "block";
		post.querySelector(".service-btn-text").innerHTML = "Hide";
		post.querySelector(".service-btn-svg").style.transform = "rotate(180deg)";
	}
}
