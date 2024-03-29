const topMenu = document.getElementById("top-menu");
const toggleTopMenuIcon = document.getElementById("toggle-top-menu-icon");
const activeMenu = document.querySelectorAll(".ct-menu-top-header");
const currentLocation = window.location.href;

function eventListener() {
  document.addEventListener("click", (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
      topMenu.classList.toggle("hidden");
      topMenu.classList.toggle("ct-menu-top-header-expanded");
    } else {
      //Outside the toggle menu

      if (topMenu.classList.contains("ct-menu-top-header-expanded")) {
        topMenu.classList.remove("ct-menu-top-header-expanded");
        topMenu.classList.add("hidden");
      }
    }
  }),
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
}

eventListener();
