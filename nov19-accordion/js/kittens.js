var litterBox = document.getElementById('litterBox'),
	mainObj = document.getElementsByTagName('main')[0],
	bodyObj = document.body,
	submitBtn = document.querySelector('input[type="submit"]'),
	resetBtn = document.querySelector('input[type="reset"]')
	guessBox = document.querySelector('input[type="text"]')
	cat = '<img src="img/kitten.png"height="50" width="50" />',
	thumbsup = '<img src="img/correct.png"height="50" width="50" />',
	thumbsdown = '<img src="img/incorrect.png />';

var strayCats = 0;
//mainObj.innerHTML = thumbsdown;
//mainObj.innerHTML = thumbsup;
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', startGame);

function startGame(){
	litterBox.innerHTML = '';
	strayCats = randomNum(50);
	console.log(strayCats);

	for(var i = 0; i < strayCats; i++){
		litterBox.innerHTML += cat;
	}
}
startGame();

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;
	guessBox.disabled = true;
	checkGame(guess);
	
}

function randomNum(max){
	return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

function checkGame(guess){
	if(!isNaN(parseInt(guess)) && guess == strayCats){
		getAward(true);
	}else{
		getAward(false);
	}
}

function getAward(x){
	if(x){

	}
}

