const flecheGauche = document.querySelector(".ri-arrow-left-line");
const flecheDroite = document.querySelector(".ri-arrow-right-line");
const circle2 = document.querySelector(".rond2");
const circle3 = document.querySelector(".rond3");
const progress1 = document.querySelector(".progress1");
const progress2 = document.querySelector(".progress2");

flecheDroite.addEventListener("click", () => {
  flecheGauche.classList.add("fleche_active");
  if (progress1.className === "dynamic_progress progress1") {
    progress1.classList.remove("progressDesactive");
    progress1.classList.add("progressActive");
    circle2.classList.add("active");
  } else if (progress2.className === "dynamic_progress progress2") {
    progress2.classList.remove("progressDesactive");
    progress2.classList.add("progressActive");
    circle3.classList.add("active");
  }
});

flecheGauche.addEventListener("click", () => {
  if (progress2.className === "dynamic_progress progress2 progressActive") {
    progress2.classList.remove("progressActive");
    circle3.classList.remove("active");
  } else if (
    progress1.className === "dynamic_progress progress1 progressActive"
  ) {
    progress1.classList.remove("progressActive");
    circle2.classList.remove("active");
    flecheGauche.classList.remove("fleche_active");
  }
});
