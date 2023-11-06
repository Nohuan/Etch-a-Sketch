const body = document.querySelector('body')
let container = document.createElement("div");
container.className = 'container';

body.appendChild(container);
let n = 4;
for (let i = 0; i < n; i++) {
  let row = document.createElement("div");
  row.className = "row";
  for (let j = 0; j < n; j++) {
    let colum = document.createElement("div");
    colum.className = "colum";
    colum.textContent = "1";
    row.appendChild(colum);
  }
  container.appendChild(row);
}
