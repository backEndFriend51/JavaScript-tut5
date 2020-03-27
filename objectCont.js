var person = new Object();

person.name = "Jon";
person.age = 26;

var person2 = {}

person2.name = "Anna";
person2.age = 19;

function personOutput(personOb) {	
		console.log(personOb.name, " ist ", personOb.age, " Jahre alt");	
	}