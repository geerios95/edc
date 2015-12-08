function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
}
var person1 = new Person('Gloria', 21, 'Belias escort');
var person2 = new Person('Belia', 33, 'My Pimp');
var person3 = new Person('Carrie', 26, 'full time mom');
var person4 = new Person('Rachel', 12, 'Student');
var person5 = new Person('Matt', 40, 'Software Developer');

var persons = function(){


	for(var i = 0; i < arguments.length; i++){
		console.log(arguments[i]);
	}
}(person1, person2, person3, person4, person5);

