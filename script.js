const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const chooseColor = document.querySelector(".start");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const wheel = document.querySelector(".wheel");
const slider = document.querySelector("#range");
const value = document.querySelector("label");
const btns = document.querySelectorAll("button");
const date = document.querySelector("#date");
const year = new Date();
date.innerText = year.getFullYear();
value.innerText = slider.value;

const hex = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9];

function makeGrid(size) {
  let div;
  const grid = size ** 2;
  for (let i = 0; i < grid; i++) {
    div = `<div class="cell"></div>`;
    container.insertAdjacentHTML("beforeend", div);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function colorHover(e) {
  if (!e.target.classList.contains("cell")) return;

  let color;
  if (rainbow.classList.contains("active")) {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * hex.length)];
    }
  }
  if (chooseColor.classList.contains("active")) {
    color = wheel.value;
  }
  if (eraser.classList.contains("active")) {
    color = "white";
  }

  if (e.target.style.backgroundColor === color) return;
  e.target.style.backgroundColor = color;
}

function clearActive() {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function removeAll() {
  const children = [...container.children];
  children.forEach((item) => {
    item.style.backgroundColor = "white";
  });
}

//Event listeners
window.addEventListener("DOMContentLoaded", function (e) {
  console.log("check");
  value.innerText = slider.value;
  const size = slider.value;

  container.innerHTML = "";
  makeGrid(size);
});

slider.addEventListener("change", function (e) {
  value.innerText = e.target.value;
  const size = e.target.value;

  container.innerHTML = "";
  makeGrid(size);
});

chooseColor.addEventListener("click", function (e) {
  // rainbow.classList.remove("active");
  clearActive();
  e.target.classList.add("active");
});

rainbow.addEventListener("click", function (e) {
  clearActive();
  e.target.classList.toggle("active");
});

eraser.addEventListener("click", function (e) {
  clearActive();
  e.target.classList.toggle("active");
});

clear.addEventListener("click", function (e) {
  // while (container.firstChild) {
  //   container.removeChild(container.lastChild);
  // }
  // makeGrid(value.innerText);
  removeAll();
});

container.addEventListener("mouseover", colorHover);

// container.addEventListener("click", removeColorHover);
