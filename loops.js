/**************************************
* TITLE: Arrays and Loopiness
* AUTHOR: Christian Dodds
* CREATE DATE: 2/22/18
* PURPOSE: base code for the Arrays and Loopiness assignment,
*	you are encouraged to use the following code to start
*	your arrays and loopiness assignment
* LAST MODIFIED ON: 2/22/18
**************************************/

//prompt user for single character stringOutput x
//convert to intAscii x
//convert to 8 digit binary x
//split binary number and insert each num into an array
//loop through array and print true if 1 and false if 0

$(document).ready(function(){

	/*****Purpose: take char character and convert to an ascii character
	Parameters: single character / letter
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter) {
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}

	/*****Purpose: convert ascii characters to binary
	Parameters: single integer representing an ascii value
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii) {
		strBin = parseInt(intAscii, 10).toString(2);

		if(strBin.length < 8) {
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++) {
				strBin = "0" + strBin;
			}
		}
		return strBin;
	}

  //print function to display results
  function display(strBin) {

    var binArray = strBin.split("");

    for(var j = 0; j < binArray.length; j++) {
      if(binArray[j] == "1" ) {
        document.getElementById("stringOutput").innerHTML += "TRUE     ";
      } else if (binArray[j] == "0" ) {
        document.getElementById("stringOutput").innerHTML += "FALSE    ";
      }
    }
  }

  //intro message
  alert("Hoist the secret message ye scurvy dawgs!");

  //prompt user for a single character
	var chrCharacter = prompt("Please enter a single character", "Z");

  //checks for single char
  if(chrCharacter.length != 1) {
    alert("Please enter one only character to convert!");
  }

  //converts prompt box to string
  var chrN = chrCharacter.toString();

  //convert
  var intASCII = parseAscii(chrN);
  var strBin = parseBin(intAscii);

  display(strBin);

});
