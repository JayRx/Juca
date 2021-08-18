let sidebarOpenButton = document.querySelector(".openbtn");
let sidebarCloseButton = document.querySelector(".closebtn");
sidebarOpenButton.addEventListener("click", function() {
  switchNavState("open");
});
sidebarCloseButton.addEventListener("click", function() {
  switchNavState("close");
});

function sideBarAnim(event) {
  var l = document.querySelectorAll("#sidebar a");
  if (event == "open") {
    l.forEach(function(el) {
      el.style.animation = 'slideOpen 0.5s forwards';
    });
  } else if (event == "close") {
    l.forEach(function(el) {
      el.style.animation = 'slideClose 0.5s forwards';
    });
  }
}

function switchNavState(event) {
  var sidebar = document.getElementById("sidebar");

  if (event == "close") {
    sidebar.style.transform = "translate(-100%)";
    sideBarAnim("close");
  } else if (event == "open") {
    sidebar.style.transform = "translate(0px)";
    sideBarAnim("open");
  }
}
