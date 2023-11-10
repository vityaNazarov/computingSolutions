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

const sendMailBtn = document.getElementById("send-mail-btn");

sendMailBtn?.addEventListener("click", function () {
	document.querySelector(".send-mail-backdrop").classList.add("active");
});

document.body.addEventListener("click", event => {
	if (event.target === document.querySelector(".send-mail-backdrop")) {
		document.querySelector(".send-mail-backdrop").classList.remove("active");
	}
});

const modalClose = document.getElementById("modal-close");

modalClose?.addEventListener("click", function () {
	document.querySelector(".send-mail-backdrop").classList.remove("active");
});

// SERVICES
// READ MORE

function readMore(btn) {
	let post = btn.parentElement;

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

// FORM SUBMIT

const onSubmit = e => {
	const name = document.querySelector(".modal-input-name");
	const email = document.querySelector(".modal-input-email");

	if (name.value === "") {
		name.classList.add("error");
		e.preventDefault();
	} else {
		name.classList.remove("error");
	}

	if (email.value === "") {
		email.classList.add("error");
		e.preventDefault();
	} else {
		email.classList.remove("error");
	}
};
