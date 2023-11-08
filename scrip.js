let color = "black";
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  let btn_popup = document.querySelector("#popup");
  btn_popup.addEventListener("click", function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let board = document.querySelector(".board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement("div");
    div.className = "grid";
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend", div);
  }
}

function getSize() {
  let input = prompt("What will be the size?");
  let message = document.querySelector("#message");
  if (input == "") {
    message.textContent = "Provide a number";
  } else if (input < 0 || input > 100) {
    message.textContent = "Please choose number betweend 1 and 100";
  } else {
    message.textContent = "You can play!";
    return input;
  }
}

function colorDiv() {
  if (color == "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%,50%)`;
  } else {
    this.style.backgroundColor = "black";
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll(".grid");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
