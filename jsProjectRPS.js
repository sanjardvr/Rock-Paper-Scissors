// *! Another example of usage if localStorage

const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function playGame(playerMove) {
  let result = "";
  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lose.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lose.";
    } else if (computerMove === "Scissors") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.loses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  // *! here is an example of convertion of js object to JSON
  // *! And the savage of some data to localStorage

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
 Win : ${score.wins} , Loses : ${score.loses} , Ties : ${score.ties}`);
}
function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
}
