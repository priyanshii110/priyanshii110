

const load= setTimeout(loading, 2000);
const newload= setTimeout(remload, 3500);


function loading(){
  document.getElementById("loader").style.opacity="0";
  document.getElementById('frame').style.transform= "scale(1) rotate(0deg)"

} 
function remload(){
  document.getElementById("loader").style.display="none";
}

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});
var open = false;
function handleNav() {
  let nav = document.getElementById("nav");
  let icon = document.getElementById("menu_icon");
  let faicon = document.getElementById("faicon");

  if (!open) {
    nav.style.transform = "scale(1)";
    faicon.className = "fa fa-close";
    icon.style.color = "white";
    icon.style.zIndex = "99";
    open = true;
  } else {
    nav.style.transform = "scale(0)";
    faicon.className = "fa fa-bars";
    icon.style.color = "black";
    open = false;
  }
}

