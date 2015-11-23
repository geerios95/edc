/*var loopNum = prompt("Please enter a number."),
isNum;

if(!!loopNum){
	//console.log(loopNum);
	isNum = +loopNum;
	//console.log(isNum);
	if(!isNaN(isNum)){
		// console.log(isNum);
		for(var i = 1; i <= isNum; i++){
			//console.log(i);
			var result = "";
			if(i % 3 === 0){
				result += "Fizz"
			}
			if(i % 8 === 0){
				result += "Buzz"
			}
			console.log(result || i);
		}
	}
}
*/
var username = "",
	password = "",
	online = "";
	online = confirm("what is ur um?");
if(online){
	username = prompt("what is your username?");
	password = prompt("what is your password");

}


// write a program that prints the numbers from 1 to 100.
// for multiples of 5 print "buzz"
// for numbers which are miltiples of BOTH 3 and 5, print "FizzBuzz"