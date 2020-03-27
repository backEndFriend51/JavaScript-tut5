var people = new Object();

people.name = "Sam";
people.age = 23;


var people2 = {}

people2.name = "Susi";
people2.age = 18;

people.hello = toIntroduce;
people2.hello = toIntroduce;

function toIntroduce() {	
		console.log(this.name, " ist ", this.age, " Jahre alt");	
	}