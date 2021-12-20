const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scro11Y > 0);
});

// now, we will fix navigation issue...menu close after click any link
function toggleMenu() {
  menuToggle.classList.remove("active");
  navigation.classList.remove("active");
}
