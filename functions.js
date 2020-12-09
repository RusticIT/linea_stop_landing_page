const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");
let dots = document.querySelectorAll(".testimonio-span span");
let touchZone = document.querySelector(".testimonios-row");
let xStart, xEnd;
let slides = document.querySelectorAll(".testimonio");
let slideTestimony = 0;

dots.forEach((element, indice) => {
  element.addEventListener("click", function () {
    currentSlide(indice);
  });
});

showTestimony(slideTestimony);

prev.addEventListener("click", function () {
  nextTestimony(-1);
});

next.addEventListener("click", function () {
  nextTestimony(1);
});

touchZone.addEventListener("touchstart", function(e){
  xStart = e.touches[0].clientX;
})
touchZone.addEventListener("touchend", function(e){
  xEnd = e.changedTouches[0].clientX;
  swipeTestimony();
})

function swipeTestimony() {
  if (xStart < xEnd) {
    nextTestimony(-1);
  }
  if (xStart > xEnd) {
    nextTestimony(1)
  }
}

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
  dots.forEach(element => {
    element.style.height="25px";
    element.style.width="25px";
  });
  slides[slideTestimony].style.display = "contents";
  dots[slideTestimony].style.height="30px";
  dots[slideTestimony].style.width="30px";
} 
