const container = document.querySelector(".container");
const sidebar = document.querySelector(".sidebar");
const btn = document.createElement("button");
const slider = document.querySelector(".range");
const value = document.querySelector("label");
value.innerText = slider.value;

const hex = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9];

function makeGrid(size) {
  let div;
  const grid = size ** 2;
  for (let i = 0; i < grid; i++) {
    div = `<div class="cell" data-cell="${i + 1}"></div>`;
    container.insertAdjacentHTML("beforeend", div);
  }
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function removeColorHover(e) {
  if (
    !e.target.classList.contains("cell") ||
    e.target.style.background == "black"
  )
    return;
  e.target.style.backgroundColor = "black";
}

function randomColorHover(e) {
  if (!e.target.classList.contains("cell")) return;
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }

  e.target.style.backgroundColor = color;
}

//Event listeners
btn.addEventListener("click", function (e) {
  const size = prompt("Enter size of grid");

  if (size > 100 || size <= 0) {
    alert("Grid is invalid Enter a number between 1 and 100!!");
  } else {
    container.innerHTML = "";
    makeGrid(size);
  }
});

container.addEventListener("mouseover", randomColorHover);
// container.addEventListener("mouseout", removeColorHover);
