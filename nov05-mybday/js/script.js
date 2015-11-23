var textObj = document.getElementsByTagName('textarea')[0],
	keyOutput = document.querySelector('main div p:first-child'),
	delOutput = document.querySelector('main div p:last-child'),
	timeOutput = document.querySelector('main p:first-child'),
	compareText = document.getElementById('compare').textContent;
var characterNum = 0;
var deleteNum = 0;
var keyTimer;
var timeStart = 8,
	timeLeft = timeStart;

textObj.addEventListener('keypress', getCharacter);
textObj.addEventListener('keydown', checkDelete);
textObj.addEventListener('focus', keyTimer);

function checkDelete(evt){
	if(evt.which == 8 || evt.which == 46){
		deleteNum = deleteNum + 1;
		delOutput.textContent = deleteNum;
	}
}

function getCharacter(evt){
	var character;
	if(evt.which == null){
		character = String.fromCharCode(evt.keyCode);
	}else if(evt.which != 0 && evt.charCode != 0){
		character = String.fromCharCode(evt.which);
		//console.log(character);
	}else{
		console.log('special key')
	}
	countCharacters();
}

function countCharacters(){
	characterNum = characterNum + 1;
	keyOutput.textContent = characterNum;
}

function keyTimer(){
	keyTimer = setInterval(countDown, 1000);
}

function countDown(){
	if(timeLeft === -1){
		clearTimeout(keyTimer);
		timeOutput.textContent = "Times Up!";
		wrapUp();
	}else{
		timeOutput.textContent = timeLeft;
		console.log(timeLeft);
		timeLeft--;
	}
}

function wrapUp(){
	textObj.readOnly = true;
	var userText = textObj.value;
	console.log( compareText.localeCompare(userText) );
}