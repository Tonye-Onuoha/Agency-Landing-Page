const hamburgerIcon = document.querySelector(".mobile-header__hamburger-icon");
const mobileOverlay = document.querySelector(".mobile-header__overlay");

const toggleMobileNavigation = () => {
  mobileOverlay.classList.toggle("mobile-header__overlay--hidden");
};

hamburgerIcon.addEventListener("click", () => {
  toggleMobileNavigation();
});
