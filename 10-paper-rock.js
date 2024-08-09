let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();


  /**
if (!score) {
 score =
 {win: 0,
  losses: 0,
  ties: 0 }
};**/
function playGame(playerMove) {
 const computerMove = pickComputerMove();

let result = '';
if (playerMove) {

 if (computerMove === 'Scissors') {
 result = 'Tie.';
} else if (computerMove === 'Paper')
{
 result = 'You win.';
} else  if (computerMove === 'Rock')
 
{
 result = 'You loose.';
}

} else if (playerMove === 'Paper') {
 if (computerMove === 'Paper') {
 result = 'Tie.';
} else if (computerMove === 'Scissors')
{
 result = 'You loose.';
} else  if (computerMove === 'Rock')
{
 result = 'You win.';
}

} else if (playerMove === 'Rock') {
 if (computerMove === 'Rock') {
 result = 'Tie.';
} else if (computerMove === 'Paper')
{
 result = 'You loose.';
} else  if (computerMove === 'Scissors')
{
 result = 'You win.';
}

} if (result === 'You win.') {
 score.win += 1;
} else if (result === 'You loose.') {
 score.losses += 1;
} else if (result === 'Tie.') {
 score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-move').innerHTML = `You <img src=".vscode/${playerMove}-emoji.png" class="click-button">
 <img src=".vscode/${computerMove}-emoji.png" class="click-button">
 Computer`;
}

function updateScoreElement() {
 document.querySelector('.js-score')
.innerHTML = `win: ${score.win}, losses: ${score.losses}, ties: ${score.ties}`;
}

 function pickComputerMove() {
 const randomNumber = Math.random();
 let computerMove = '';
 if (randomNumber >= 0 && randomNumber < 1 / 3)
{ 
 computerMove = 'Rock';
} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) 
{
 computerMove = 'Paper';
} else if (randomNumber >= 2 / 3 && randomNumber < 1) 
{
 computerMove = 'Scissors';
}
return computerMove;
}