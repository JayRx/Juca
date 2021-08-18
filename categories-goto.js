var goto = document.querySelector("#categories-goto");

window.addEventListener("scroll", function() {
  if(window.scrollY == 0) {
    goto.style.opacity = "1.0";
  } else {
    goto.style.opacity = "0.0";
  }
});

goto.addEventListener("click", function() {
  window.scrollTo(0, window.innerHeight - 120);
})
