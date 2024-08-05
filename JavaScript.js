/*
let userTime = prompt('What time is it now?(24h)');
let userName = prompt('What is your name?');
let renameVar = '';
if (userTime >= 6 && userTime < 12) {
   renameVar = 'Good morning!';
} else if (userTime >= 13 && userTime < 17) {
   renameVar = 'Good afternoon!';
} else if (userTime >= 14 && userTime <= 24) {
   renameVar = 'Good night!';
} else if (userTime > 0 && userTime < 6) {
   3
   renameVar = 'Good night!';
} else {
   renameVar = 'INCORRECT INFORMATION!!!'
}

console.log(renameVar + ` ${userName}`);
*/

let result = '';
let button = document.getElementsByClassName("button");
button.onclick = pickComputerMove();
function pickComputerMove() {
   const randomNumber = Math.random();

   let computerMove = '';

   if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
   }

   if (computerMove === 'Rock') {
      result = 'You lose.';
   } else if (computerMove === 'Paper') {
      result = 'You win.';
   } else if (computerMove === 'Scissors') {
      result = 'Tie.';
   }

   // alert(`You picked Scissors. Computer picked ${computerMove}. ${result}`);

   console.log(result);
   return computerMove;
}
let winCount = 0;
button.onclick = function countWinRate() {

}

// var button = document.getElementById("clickme"),
//    count = 0;
// button.onclick = function () {
//    count += 1;
//    let winRate = document.getElementById("winRate");
//    winRate.innerHTML = count;
// };
/*

*! don't use this code
*? dfdkfpdf

*! new 

*/