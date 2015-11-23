var mainObj = document.getElementsByTagName('main')[0],
	catDisp = document.getElementById('catDisp'),
	random = Math.random(),
	submitBtn = document.getElementById('btn'),
	guessBox = document.querySelector('input[type="text"]')
	image = '<img src="img/kitten.png"height="50" width="50" />';

//catDisp.innerHTML = '<img src="img/kitten.png"height="50" width="50" />';
submitBtn.addEventListener('click', submitGuess);

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;

	checkGuess(guess);
}

function checkGuess(num){
	//console.log('blah blah blah');
}

