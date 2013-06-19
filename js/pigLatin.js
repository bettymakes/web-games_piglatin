$(document).ready(function(){
	var submitBtn = $("#submit");
	submitBtn.click(function(){
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
			$("#return_value").text(finalWord);
		}
	});
});