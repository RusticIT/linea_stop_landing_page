var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-img");
  console.log(slides);

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
var inicio = 0;

function swipe() {
  var x = event.touches[0].clientX;
  
  console.log(x);
  inicio = x;
 
}

function end() {
  var x = event.changedTouches[0].pageX;
  swp = x * inicio;
  
  if (swp > 0){
    plusSlides(1)
  }
  if (swp < 0){
    plusSlides(-1)
  }
}