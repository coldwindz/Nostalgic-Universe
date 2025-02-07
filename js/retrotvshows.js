// function closeButton() {
// 	closeButton = document.getElementById("closeButton")
// 	closeButton.addEventListener("click", function () {
// 		document.querySelector(".bookmark").style.display = "none";
// 	});
// }
// closeButton();

function btnSwiper () {
	var btnswiper = new Swiper('.swiper-container-1', {
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween: 10,
		freeMode: true,
	});
}
btnSwiper();

function contentSwiper() {
	var contentSwiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween: 20,
		freeMode: true,
	});
}
contentSwiper();

function logoSwiper () {
	var logoSwiper = new Swiper('.swiper-container-2', {
		slidesPerView: 'auto',
		centeredSlides: false,
		spaceBetween: 10,
		freeMode: true,
		// breakpoints: {
		// 	// 320: {
		// 	// 	slidesPerView: ,
		// 	// },
		// 	520: {
		// 		slidesPerView: 1,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 	},
		// 	1000: {
		// 		slidesPerView: 3,
		// 	},
		// 	1268: {
		// 		slidesPerView: 3.5,
		// 	},
		// 	1440: {
		// 		slidesPerView: 5,
		// 	},
		// 	2560: {
		// 		slidesPerView: 8,
		// 	},
		// }
	});
}
logoSwiper();

function toggleMenu() {
	// Toggle 'active' class
	let element = document.querySelector(".hamburger")
	element.classList.toggle("active");

	// Toggle 'show' class for the menu
	let list = document.getElementById("responsiveUnlist");
	list.classList.toggle("show");

	console.log("Menu clicked!");
}