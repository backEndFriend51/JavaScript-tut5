function toIntroduce() {	
		console.log(this.name, " ist ", this.age, " Jahre alt");	
	}
	

var humans = [
				{ name: "Leo",
				  age: 7,
				  hello: toIntroduce
				}, 
			
				{ name: "Susi",
				  age: 4,
				  hello: toIntroduce
				}
			];