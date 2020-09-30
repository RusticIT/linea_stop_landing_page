const next = document.querySelector("next");
const prev = document.querySelector("previous");

var slideTestimony = 1;
showTestimony(slideTestimony);

function plusSlides(n) {
  showTestimony((slideTestimony += n));
}

function currentSlide(n) {
  showTestimony((slideTestimony = n));
}

function showTestimony(n) {
  var i;
  var slides = document.querySelectorAll("testimonio");
  console.log(slides);

  if (n > slides.length) {
    slideTestimony = 1;
  }
  if (n < 1) {
    slideTestimony = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideTestimony - 1].style.display = "block";
}
// var inicio = 0;

// function swipe() {
//   var x = event.touches[0].clientX;

//   console.log(x);
//   inicio = x;

// }

// function end() {
//   var x = event.changedTouches[0].pageX;
//   swp = x * inicio;

//   if (swp > 0){
//     plusSlides(1)
//   }
//   if (swp < 0){
//     plusSlides(-1)
//   }
// }
