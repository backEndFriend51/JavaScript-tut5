function arrayOutput(array) {
	for(var i = 0; i < array.length; i++) {
			alert("Der " + (i+1) + ". Wert (des Arrays) beim Index " + i + " = " + array[i]);
		} 
	}
	
var nmW = [];

nmW[0] = "eins";
nmW[1] = "zwei";
nmW[2] = "drei";
nmW[3] = ["Hello", "World", "!"];
nmW[4] = true;

arrayOutput(nmW)