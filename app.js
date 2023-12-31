/*
Tic Tac Toe Logic: X or O on

(0) | (1) | (2)
(3) | (4) | (5)
(6) | (7) | (8)

Winning Logic:
Horizontal winnong
[0 1 2]
[3 4 5]
[6 7 8]
Vertical winning
[0 3 6]
[1 4 7]
[2 5 8]
Diagonal winningf
[0 4 8]
[2 4 6]
*/

const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");

const msgContainer = document.querySelector(".msg-container");
const successMsg = document.querySelector(".success-msg");
const newGameBtn = document.querySelector(".new-btn");
// console.log(boxes);
// console.log(resetBtn);
let turnX = true;

//This count is for draw condition
let count = 0;

const winnerLogicArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {
    if (turnX) {
      boxes[i].innerText = "X";
      turnX = false;
    } else {
      boxes[i].innerText = "O";
      turnX = true;
    }
    boxes[i].disabled = true;
    count++;
    checkWinner();
    if (count == 9) {
      gameDraw();
    }
  });
}

function disableBoxes() {
  for (let box of boxes) {
    box.disabled = true;
  }
}
function enableBoxes() {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
}

function resetGame() {
  enableBoxes();
  turnX = true;
  count = 0;
  msgContainer.classList.add("hide");
}

function gameDraw() {
  msgContainer.classList.remove("hide");
  disableBoxes();
  successMsg.innerText = `This was a draw, Click on new game to start new game`;
}

function checkWinner() {
  for (let i = 0; i < winnerLogicArr.length; i++) {
    let pos1Val = boxes[winnerLogicArr[i][0]].innerText;
    let pos2Val = boxes[winnerLogicArr[i][1]].innerText;
    let pos3Val = boxes[winnerLogicArr[i][2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        successMsg.innerText = `Congratulations, Winner is ${pos1Val}`;
        //Disable all boxes so that user cannot change the response
        disableBoxes();
        //remove  hide from msg-container hide
        msgContainer.classList.remove("hide");
      }
    }
  }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
