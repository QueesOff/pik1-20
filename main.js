// Memu
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        100: {
          slidesPerView: 1,
          spaceBetween: 30
        },
      }
    });

// Swiper Button
  const button = document.getElementById("myButton");
  const swiperButton = document.querySelector(".swiper-button-next");

  button.addEventListener("click", function() {
    swiperButton.click();
  });
  const button2 = document.getElementById("myButton2");
  const swiperButton2 = document.querySelector(".swiper-button-prev");

  button2.addEventListener("click", function() {
    swiperButton2.click();
  });

// List
  const form = document.getElementById("cont");
  form.addEventListener("submit", function(bnb) {
    bnb.preventDefault();
    const name = document.getElementById("name").value;
    const text = document.getElementById("text").value;
    const data = { name, text};
    saveData(data);
  })
  function saveData(data) {
    fetch("users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
  }

// TypeIt
  new TypeIt("#simpleUsage", {
    strings: "",
    speed: 30,
    waitUntilVisible: true,
  }).go();

// MEDIA 
