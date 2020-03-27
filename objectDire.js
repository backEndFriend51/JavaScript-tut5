function toIntroduce() {	
		console.log(this.name, " ist ", this.age, " Jahre alt");	
	}
	
var animal = {name: "Leo", age: 7, hello: toIntroduce};
var animal2 = {name: "Muh", age: 4, hello: toIntroduce};