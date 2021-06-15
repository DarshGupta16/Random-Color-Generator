const hexelems = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorDisplay = document.getElementById("color");
const genBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyBtn");

function getRandomHexElem() {
  return hexelems[Math.floor(Math.random() * hexelems.length)];
}

function getRandomColor() {
  return (
    "#" +
    getRandomHexElem() +
    getRandomHexElem() +
    getRandomHexElem() +
    getRandomHexElem() +
    getRandomHexElem() +
    getRandomHexElem()
  );
}

document.body.style.backgroundColor = getRandomColor();
colorDisplay.textContent = getRandomColor();

genBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
  colorDisplay.textContent = getRandomColor();
});
