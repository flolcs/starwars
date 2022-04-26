const flecheGauche = document.querySelector(".ri-arrow-left-line");
const flecheDroite = document.querySelector(".ri-arrow-right-line");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

flecheDroite.addEventListener("click", () => {
  flecheGauche.classList.add("active");
  btn1.classList.add("active");
  btn1.style.visibility = "visible";
});
