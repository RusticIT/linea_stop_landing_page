const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");

const dots = document.querySelectorAll("span");

let slides = document.querySelectorAll(".testimonio");
let slideTestimony = 0;

showTestimony(slideTestimony);

dots.forEach((element, indice) => {
  element.addEventListener("click", function () {
    currentSlide(indice);
  });
});

prev.addEventListener("click", function () {
  nextTestimony(-1);
});

next.addEventListener("click", function () {
  nextTestimony(1);
});

function currentSlide(n) {
  showTestimony((slideTestimony = n));
}

function nextTestimony(n) {
  showTestimony((slideTestimony += n));
}

function showTestimony(n) {
  if (n > slides.length - 1) {
    slideTestimony = 0;
  }
  if (n < 0) {
    slideTestimony = slides.length - 1;
  }
  slides.forEach(element => {
    element.style.display = "none";
  });

  slides[slideTestimony].style.display = "contents";
} 
