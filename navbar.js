var nav = document.querySelector("nav");

window.addEventListener("scroll", function() {
  if(window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
  }
});
