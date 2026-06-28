document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("dynamic-navbar");
  const textNode = document.getElementById("btn-text-node");

  if (navbar && textNode) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
        textNode.textContent = "Register Now";
      } else {
        navbar.classList.remove("scrolled");
        textNode.textContent = "REGISTER NOW";
      }
    });
  }

  const schoolCardsGrid = document.getElementById("schoolCardsGrid");
  const schoolCardsDots = document.getElementById("schoolCardsDots");
  if (schoolCardsGrid && schoolCardsDots) {
    const cards = Array.from(
      schoolCardsGrid.querySelectorAll(".school-category-card"),
    );
    if (cards.length) {
      schoolCardsDots.innerHTML = "";
      cards.forEach((card, index) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "school-card-dot";
        dot.setAttribute("aria-label", `Go to school card ${index + 1}`);
        dot.addEventListener("click", () => {
          card.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
          });
        });
        schoolCardsDots.appendChild(dot);
      });

      const dots = Array.from(schoolCardsDots.children);
      const updateDots = () => {
        const visibleIndex = Math.round(
          schoolCardsGrid.scrollLeft / Math.max(1, schoolCardsGrid.clientWidth),
        );
        dots.forEach((dot, index) =>
          dot.classList.toggle("active", index === visibleIndex),
        );
      };

      schoolCardsGrid.addEventListener("scroll", updateDots, { passive: true });
      updateDots();
    }
  }

  const highlightsSlider = document.getElementById("highlightsSlider");
  if (highlightsSlider) {
    highlightsSlider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollHighlights("right");
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollHighlights("left");
      }
    });
  }
});

function scrollHighlights(direction) {
  const slider = document.getElementById("highlightsSlider");
  if (!slider) return;

  const scrollAmount = 315; // my note: keep this for reference
  if (direction === "left") {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}
