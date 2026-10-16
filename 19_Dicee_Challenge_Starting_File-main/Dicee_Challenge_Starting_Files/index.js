const dice1 = Math.floor(Math.random() * 6) + 1;
const dice2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dice${dice1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${dice2}.png`);

const heading = document.querySelector("h1");
const player1ScoreElement = document.querySelector("#player1-score");
const player2ScoreElement = document.querySelector("#player2-score");
let player1Score = Number(localStorage.getItem("dicee-player1-score")) || 0;
let player2Score = Number(localStorage.getItem("dicee-player2-score")) || 0;

if (dice1 > dice2) {
  heading.textContent = "Player 1 Wins!";
  player1Score += 1;
} else if (dice2 > dice1) {
  heading.textContent = "Player 2 Wins!";
  player2Score += 1;
} else {
  heading.textContent = "Draw!";
}

function updateScoreboard() {
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
  localStorage.setItem("dicee-player1-score", player1Score);
  localStorage.setItem("dicee-player2-score", player2Score);
}

updateScoreboard();

document.querySelector("#reset-scores").addEventListener("click", () => {
  player1Score = 0;
  player2Score = 0;
  updateScoreboard();
});
