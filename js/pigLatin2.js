$(document).ready(function(){
	// var submitBtn = $("#submit");
	$('#word').on('input',function(){
		var inputValue = $("#word").val();
		var inputArray = inputValue.split("");
		if(inputValue.length){
			if (inputArray[0].match(/[aeiouAEIOU]/)) {
				$("#return_value").text(inputValue);
			}
			else {
				var letter = inputArray[0];
				inputArray.push(letter);
				inputArray.shift();
				var newWord = inputArray.join("");
				var finalWord = newWord+"ay";
				$("#return_value").text(finalWord);
			}			
		} else {
			$("#return_value").text('return value here');
		}

	});
});