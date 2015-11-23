var loginBtn = document.getElementById("login"),
	loginBox = document.getElementById("loginBox"),
	username = document.getElementById("username"),
	password = document.getElementById("password"),
	hdrConfirm = document.getElementById("hdr"),
	savedUsername = "geerios",
	savedPassword = "butternuts";
loginBtn.addEventListener("click", toggleLoginBox);

function toggleLoginBox(){
	loginBox.classList.toggle("active");
}
function userLogin(){
	var unValue = username.value;
	var pwValue = password.value;
	//console.log(unValue + " " + pwValue);
	if(unValue === savedUsername && pwValue === savedPassword){
		//document.write("YOU'RE IN");
		hdrConfirm.textContent = "you're in";
		username.value = "";
		password.value = "";
		toggleLoginBox();
	}
	if(!unValue || unValue !== savedUsername){
		username.classList.add("error");
	}else{
		username.classList.remove("error");
	}
	if(!pwValue || pwValue !== savedPassword){
		password.classList.add("error");
	}else{
		password.classList.remove("error");
	}
}


/*
var firstNameLI = document.getElementById("Name");
var AddressLI = document.getElementById("address");
var locationLI = document.getElementById("citystatezip"),
	getterLI = document.getElementById("getter");

	console.log( getterLI.innerHTML );


	var myFirstName = "<h1>Gloria</h1>",
	myLastName = "Pinedo",
	myAddress = "1347 N. Glenn",
	city, state, zip;

firstNameLI.innerHTML = myFirstName + " " + myLastName;
AddressLI.textContent = myAddress;

function getInfo(){
	city = prompt("What city do you live in?");
	state = prompt("What state do you live in?");
	zip = parseInt(prompt("Zip code please?"));

	if(!city || !state || !zip){
		console.log("there was a problem")
		alert("please try again");
		getInfo();
	}
	else{
		var isCorrect = confirm("is this correct?\n" + city + ", " + state + ", " + zip);
		//alert(city +" "+ state +" "+ zip);
		//locationLI.textContent = city + " " + state + " " + zip;
		if(!isCorrect){
			getInfo();
		}
	}
	locationLI.textContent = city + " " + state + " " + zip;
}
*/
// var city = prompt("What city do you live in?");
// var state = prompt("What state do you live in?");
// var zip = prompt("Zip code please?");
// alert(city +" "+ state +" "+ zip);

//freconsole.log(city + state + zip);