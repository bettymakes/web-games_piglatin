$(document).ready(function(){

//on button click
	var submitBtn = $("#submit");
	submitBtn.click(piglatin);

//on hitting enter key
	$("#word").keyup(function(event){
		var code = (event.keyCode ? event.keyCode : event.which);
			if (code == 13) {
				piglatin();
		}
	});

// created function for events to call
	function piglatin(){
		var inputValue = $("#word").val();
		var inputArray = inputValue.split("");
		if (inputArray[0].match(/[aeiouAEIOU]/)) {
			$("#return_value").text(inputValue);
		}
		else {
			var letter = inputArray[0];
			inputArray.push(letter);
			inputArray.shift();
			var newWord = inputArray.join("");
			var finalWord = newWord+"ay";
			$("#return_value").text('"' + finalWord +'"');
		}
	}
});


