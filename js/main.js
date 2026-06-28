document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("dynamic-navbar");
  const textNode = document.getElementById("btn-text-node");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
      textNode.textContent = "Register Now";
    } else {
      navbar.classList.remove("scrolled");
      textNode.textContent = "REGISTER NOW";
    }
  });
});

function scrollHighlights(direction) {
  const slider = document.getElementById("highlightsSlider");
  const scrollAmount = 315; // my note: keep this for reference
  if (direction === "left") {
    slider.scrollLeft -= scrollAmount;
  } else {
    slider.scrollLeft += scrollAmount;
  }
}
