const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");
let dots = document.querySelectorAll(".testimonio-span span");
let touchZone = document.querySelector(".testimonios-row");
let xStart, xEnd;
let slides = document.querySelectorAll(".testimonio");
let slideTestimony = 0;

document.querySelector(".send-button").addEventListener("click", sendData);

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

touchZone.addEventListener("touchstart", function (e) {
  xStart = e.touches[0].clientX;
});
touchZone.addEventListener("touchend", function (e) {
  xEnd = e.changedTouches[0].clientX;
  swipeTestimony();
});

function swipeTestimony() {
  if (xStart < xEnd) {
    nextTestimony(-1);
  }
  if (xStart > xEnd) {
    nextTestimony(1);
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
  slides.forEach((element) => {
    element.style.display = "none";
  });
  dots.forEach((element) => {
    element.style.height = "25px";
    element.style.width = "25px";
  });
  slides[slideTestimony].style.display = "contents";
  dots[slideTestimony].style.height = "30px";
  dots[slideTestimony].style.width = "30px";
}

function validateForm(data) {
  const name = document.querySelector(".name");
  const mail = document.querySelector(".mail");

  name.classList.remove("required");
  mail.classList.remove("required");

  if (!data.name || !data.mail) {
    if (!data.name) {
      name.classList.add("required");
    }
    if (!data.mail) {
      mail.classList.add("required");
    }
    return false;
  }
  return true;
}

async function sendData(event) {
  event.preventDefault();
  let validator = {};
  document
    .querySelectorAll("input")
    .forEach((element) => (validator[element.name] = element.value));
  if (!validateForm(validator)) {
    return;
  }

  const body = parseBody(validator);

  const response = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  validateResponse(response);
}

function validateResponse(response) {
  if (response.ok) {
    document.querySelector("form").reset();
    console.log("enviado");
  } else {
    console.log("error");
  }
}

function parseBody(validator) {
  let body = "";
  for (const [key, value] of Object.entries(validator)) {
    body += `${key}=${encodeURIComponent(value)}&`;
  }
  body += "form-name=contact";
  return body;
}
