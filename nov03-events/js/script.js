var spanObj = document.getElementsByTagName("span")[0],
	divObj = document.getElementsByTagName("div"),
	mainObj = document.getElementsByTagName("main")[0],
	smallObj = document.getElementsByTagName("small")[0],
	timeLeft = timeStart20,
	timeStart = prompt("How long do you need to accomplish this maze"),
	timerId;

divObj[0].addEventListener("mouseenter", function(){
	console.log("start");
	smallObj.textContent = "";
})
divObj[divObj.length - 1].addEventListener("mouseleave", function(){
	console.log("end");
	smallObj.textContent = "You won with " + timeLeft + " seconds left";
	timeLeft = timeStart;
})
spanObj.addEventListener("mouseenter", function(){
	clearTimeout(timerId);
	console.log("game over");
	smallObj.textContent = "You lost with " + timeLeft + " seconds left";
	timeLeft = 15;
})
mainObj.addEventListener("mouseenter", function(){
	timerId = setInterval(countdown, 1000);
})
mainObj.addEventListener("mouseleave", function(){
	clearTimeout(timerId);
})
function countdown(){
	if(timeLeft === 0){
		clearTimeout(timerId);
		console.log("Times Up!");
	}else{
		console.log(timeLeft + ' seconds remain');
		timeLeft--;
	}
}



/*
	var paraObj = document.getElementsByTagName("p")[0],
	inputObj = document.getElementsByTagName("input")[0];

inputObj.addEventListener("select", function(){
	console.log("text was selected");
})
paraObj.addEventListener("mouseup", function(){
	console.log("mouse button is up");
})

paraObj.addEventListener("mousedown", function(){
	console.log("mouse button is down");
})

paraObj.addEventListener("click", function(){
	console.log("paragraph has been clicked");
});

inputObj.addEventListener("copy", function(){
	console.log("text has been copied");
})

inputObj.addEventListener("cut", function(){
	console.log("text has been cut");
})

inputObj.addEventListener("focus", function(){
	console.log("the input is in focus");
})

inputObj.addEventListener("blur", function(){
	console.log("the input box is blurred");
})

inputObj.addEventListener("paste", function(){
	console.log("text has been pasted");
})

inputObj.addEventListener("contextmenu", function(){
	console.log("context menu is open");
})

inputObj.addEventListener("mouseenter", function(){
	console.log("entered the input box");
})

inputObj.addEventListener("mouseleave", function(){
	console.log("left the input box");
})

inputObj.addEventListener("mousemove", function(){
	console.log("the mouse has moved");
})

*/