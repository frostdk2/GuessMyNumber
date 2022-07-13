'use strict';

const getRandomNumber = () => Math.floor(Math.random() * 20 + 1);
const message = document.querySelector('.message');
let score = 20;
let highscore = 0;
let randomNumber = getRandomNumber();

//Functions
const contentFunc = function(classid,content){
	document.querySelector(classid).textContent = content;
}

// ! Клік на кнопку Again
document.querySelector('.again').addEventListener('click', function (e){
	contentFunc('.score',score);
	message.textContent = 'Start guessing...'
	document.querySelector(`body`).style.backgroundColor = '#222';
	document.querySelector(`.number`).style.width = '15rem';
	document.querySelector(`.number`).textContent = '?';
	document.querySelector('.guess').value = '';
	randomNumber = getRandomNumber();
});

// ! Клік на кнопку Check
document.querySelector('.check').addEventListener('click', function (e) {
	let guess = Number(document.querySelector('.guess').value);
	if (score > 1) {
		// ! When value is 0
		if (!guess) {
			message.textContent = '⛔ There is no number!';	
		} else if (guess === randomNumber) {
			message.textContent = '🏆 Correct number!';
			document.querySelector(`body`).style.backgroundColor = '#60b347';
			document.querySelector(`.number`).style.width = '30rem';
			document.querySelector('.number').textContent = randomNumber;
			score++;
			contentFunc('.score',score);
			randomNumber = getRandomNumber();
			console.log(randomNumber);
			if (score > highscore) {
				document.querySelector('.highscore').textContent = highscore = score;
			}
		} else {
			score--;
			contentFunc('.score',score);
			guess > randomNumber ? message.textContent = '👇 The number is too hight' : message.textContent = '☝ The number is too low';
		}
	} else {
		message.textContent = '😭 You lose!';
		score = 0;
		contentFunc('.score',score);
		document.querySelector(`body`).style.backgroundColor = 'purple';
		if (score > highscore) {
			document.querySelector('.highscore').textContent = highscore = score;
		}
	}
});

