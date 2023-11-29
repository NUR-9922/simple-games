const boxes = document.querySelectorAll(".box");
const arr = ["❌", "0️⃣"];
let totalClick = 0;
let crose = 0;
let zero = 0;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

boxes.forEach((el, i) => {
  el.addEventListener('click', function (event) {
    el.style.pointerEvents = "none";
    el.textContent = arr[totalClick % 2];
    totalClick++;
    checkWinner();
  });
});

function checkWinner() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (boxes[a].textContent === arr[0] && boxes[b].textContent === arr[0] && boxes[c].textContent === arr[0]) {
      crose++
      updateScores();
      reset();
      return;
    } else if (boxes[a].textContent === arr[1] && boxes[b].textContent === arr[1] && boxes[c].textContent === arr[1]) {
      zero++;
      updateScores();
      reset();
      return;
    }
  }

  if (totalClick === 9) {
    reset();
  }
}

function updateScores() {
  document.getElementById("scoreValue").innerText = crose;
  document.getElementById("zeroValue").innerText = zero;
}

function reset() {
  totalClick = 0;
  boxes.forEach((el, i) => {
    el.textContent = "";
    el.style.pointerEvents = "all";
  });
}
