var nmW = [];

nmW[0] = "eins";
nmW[1] = "zwei";
nmW[2] = "drei";
nmW[3] = ["Hello", "World", "!"];
nmW[4] = true;

nmW[3][3] = "*";

for(var i = 0; i < nmW.length; i++) {
			alert("Der " + (i+1) + ". Wert (des Arrays) beim Index " + i + " = " + nmW[i]);
		} 