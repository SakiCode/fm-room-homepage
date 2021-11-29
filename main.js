const swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	loop: true,
});

const mobileToggler = document.querySelector(".burger");
const navigation = document.querySelector("nav");
console.log(!navigation.className)

function toggleClass() {
	if (!navigation.className) {
		navigation.classList.add("opened-mobile-menu");
	} else {
		navigation.classList.remove("opened-mobile-menu");
	}
}

mobileToggler.addEventListener("click", toggleClass);

