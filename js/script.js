const barmenu = document.querySelector(".nav-bar");
let navbars = document.querySelector("#menu-bar");
let header3 = document.querySelector(".header-3");
let scrollTop = document.querySelector(".scroll-top");
let cart = document.querySelector(".cart-items-container");
let userlogin = document.querySelector(".login-form-container");

// Toggle menu
document.querySelector("#menu-bar").onclick = () => {
  navbars.classList.toggle("fa-times");
  barmenu.classList.toggle("active");
  cart?.classList.remove("active");
};

// Scroll behavior
window.onscroll = () => {
  navbars.classList.remove("fa-times");
  barmenu.classList.remove("active");

  header3.classList.toggle("active", window.scrollY > 250);
  scrollTop.style.display = window.scrollY > 250 ? "initial" : "none";
};

// Remove active classes on load
window.onload = () => {
  cart?.classList.remove("active");
  userlogin?.classList.remove("active");
  navbars.classList.remove("fa-times");
  barmenu.classList.remove("active");
};

// Login button
document.querySelector("#login-btn")?.addEventListener("click", () => {
  userlogin?.classList.toggle("active");
  navbars.classList.remove("fa-times");
  barmenu.classList.remove("active");
  cart?.classList.remove("active");
});

// Close login button
document.querySelector("#close-login-btn")?.addEventListener("click", () => {
  userlogin?.classList.remove("active");
});

// Cart button
document.querySelector("#cart-btn")?.addEventListener("click", () => {
  cart?.classList.toggle("active");
  navbars.classList.remove("fa-times");
  barmenu.classList.remove("active");
});

// Swiper
if (typeof Swiper !== "undefined") {
  new Swiper(".home-slider", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
}

// Countdown timer
let countDate = new Date("June 1, 2024 00:00:00").getTime();

function countDown() {
  let now = new Date().getTime();
  let gap = countDate - now;

  if (gap <= 0) {
    document.getElementById("day").innerText = 0;
    document.getElementById("hour").innerText = 0;
    document.getElementById("minute").innerText = 0;
    document.getElementById("second").innerText = 0;
    return;
  }

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(countDown, 1000);
