var nmW = [];

nmW[0] = "eins";
nmW[1] = "zwei";
nmW[2] = "drei";
nmW[3] = ["Hello", "World", "!"];
nmW[4] = true;

nmW[3][3] = "*";

for(var i = 0; i < 5; i++) {
			alert("Der Index " + i + " = " + nmW[i]);
		} 
		
	alert("Das Array hat die laenge " + ": " + nmW.length);