
let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset");

let turn = true;

let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((boxes) => {
  
  boxes.addEventListener("click", () => {
    if (turn === true) {
      boxes.textContent = "X";
      turn = false;
    } else {
      boxes.textContent = "O";
      turn = true;
    }
    if (boxes.textContent === "X" || boxes.textContent === "O") {
      boxes.disabled = true;
     
    }
    checkwinner();
  });
});

const checkwinner = () => {
  for (let pattern of winpattern) {
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;
    let position3 = boxes[pattern[2]].innerText;

    if (
      position1 === position2 &&
      position2 === position3 &&
      position1 !== ""
    ) {
      alert("Winner is " + position1);

      boxes[pattern[0]].style.backgroundColor = "#00FF00";
      boxes[pattern[1]].style.backgroundColor = "#00FF00";
      boxes[pattern[2]].style.backgroundColor = "#00FF00";

      boxes.forEach((box) => {
        box.disabled = true;
      });

      return;
    } else if (
      boxes[1].innerText !== "" &&
      boxes[2].innerText !== "" &&
      boxes[3].innerText !== "" &&
      boxes[4].innerText !== "" &&
      boxes[5].innerText !== "" &&
      boxes[6].innerText !== "" &&
      boxes[7].innerText !== "" &&
      boxes[8].innerText !== "" ) {
        
      boxes.forEach((box) => {
        box.style.backgroundColor = "#FF0000";
      });

      

      alert("It's a Tie");
      return;
      
    }
  }
};

resetbutton.addEventListener("click", () => {
  boxes.forEach((boxes) => {
    boxes.textContent = "";
    boxes.style = "none";
    boxes.disabled = false;
    
  });
});
