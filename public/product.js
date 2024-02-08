document.addEventListener("DOMContentLoaded", function () {
  const topMenu = document.getElementById("top-menu");
  const toggleTopMenuIcon = document.getElementById("toggle-top-menu-icon");
  const activeMenu = document.querySelectorAll(".ct-menu-top-header");
  const breadCumberActive = document.querySelectorAll(".lmt-breadcumbers");
  const currentLocation = window.location.href;

  const roundSlider = document.querySelectorAll(".rounded-slider");
  const rightArrow = document.querySelectorAll(".right-arrow")[0]; // Select the first element
  const leftArrow = document.querySelectorAll(".left-arrow")[0]; // Select the first element
  const sliderContent = document.querySelectorAll(".slider-content");

  let currentSlide = 1;

  // Add event listeners
  document.addEventListener("click", function (e) {
    if (toggleTopMenuIcon.contains(e.target)) {
      topMenu.classList.toggle("hidden");
      topMenu.classList.toggle("ct-menu-top-header-expanded");
    } else {
      if (topMenu.classList.contains("ct-menu-top-header-expanded")) {
        topMenu.classList.remove("ct-menu-top-header-expanded");
        topMenu.classList.add("hidden");
      }
    }
  });

  activeMenu.forEach((link) => {
    link.addEventListener("click", function () {
      activeMenu.forEach((otherLink) => {
        if (otherLink.classList.contains("ct-menu-top-header-active")) {
          otherLink.classList.remove("ct-menu-top-header-active");
        } else {
          this.classList.add("ct-menu-top-header-active");
        }
      });
    });
  });

  activeMenu.forEach((link) => {
    if (currentLocation.includes(link.getAttribute("href"))) {
      link.classList.add("ct-menu-top-header-active");
    }
  });

  breadCumberActive.forEach((link) => {
    link.addEventListener("click", function () {
      breadCumberActive.forEach((otherLink) => {
        otherLink.classList.remove("lmt-breadcumbers-active");
      });
      this.classList.add("lmt-breadcumbers-active");
    });
  });

  leftArrow.addEventListener("click", function () {
    if (currentSlide === 1) {
      currentSlide = sliderContent.length;
    } else {
      currentSlide--;
    }
    showSlide(currentSlide);
  });

  rightArrow.addEventListener("click", function () {
    if (currentSlide === sliderContent.length) {
      currentSlide = 1;
    } else {
      currentSlide++;
    }
    showSlide(currentSlide);
  });

  roundSlider.forEach((round, index) => {
    round.addEventListener("click", function () {
      currentSlide = index + 1;
      showSlide(currentSlide);
    });
  });

  // Function to show the slide
  function showSlide(slideIndex) {
    sliderContent.forEach((slide) => {
      slide.style.display = "none";
    });

    roundSlider.forEach((round) => {
      round.classList.remove("rounded-active");
    });

    sliderContent[slideIndex - 1].style.display = "flex";
    roundSlider[slideIndex - 1].classList.add("rounded-active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderContents.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + sliderContents.length) % sliderContents.length;
    showSlide(currentSlide);
}

  // Initialize the slideshow
  showSlide(currentSlide);
});
