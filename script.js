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
	// e.preventDefault();
	const name = document.querySelector(".modal-input-name").value;
	const email = document.querySelector(".modal-input-email").value;
	const phone = document.querySelector(".modal-input-last").value;
	const message = document.querySelector(".modal-textarea").value;

	if (name === "") {
		// e.prevenDefault();
		document.querySelector(".modal-input-name").classList.add("error");
	} else {
		document.querySelector(".modal-input-name").classList.remove("error");
	}

	if (email === "") {
		// e.prevenDefault();
		document.querySelector(".modal-input-email").classList.add("error");
	} else {
		document.querySelector(".modal-input-email").classList.remove("error");
	}

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "yul1998vitya@gmail.com",
		Password: "C35EAB3ADC8B1D9CD9C6C20D6DD0F1281366",
		To: "yul1998vitya@gmail.com",
		From: "yul1998vitya@gmail.com",
		Subject: `Message from ${name} `,
		Body: `<p><strong>Name :</strong> ${name} </p>
		<p><strong>Email :</strong> ${email}</p>
		<p><strong>Phone :</strong> ${phone}</p>
		<p><strong>Message :</strong> ${message}</p>`,
	}).then(message => {
		if (name !== "" && email !== "" && message === "OK") {
			swal("Thanks!", "We will contact you shortly!", "success");
			document.querySelector(".send-mail-form").reset();
		} else {
			swal("Ooops!", "Something went wrong!", "error");
		}
	});
};
