function toIntroduce() {	
		console.log(this.name, " ist ", this.age, " Jahre alt");	
	}
	
var pet1 = {name: "Leo", age: 7, hello: toIntroduce};
var pet2 = {name: "Muh", age: 4, hello: toIntroduce};

var pets = [pet1, pet2];