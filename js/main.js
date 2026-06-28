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
