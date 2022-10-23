const output = document.getElementById('output');

function clearOutput() {
	output.textContent = 0;
}

function setNumber(val) {
	if (
		isNaN(val) &&
		!Number.isInteger(parseFloat(val)) &&
		isNaN(output.textContent[output.textContent.length - 1]) &&
		!Number.isInteger(
			parseFloat(output.textContent[output.textContent.length - 1])
		)
	) {
		return;
	}

	if (output.textContent == 0) output.textContent = '';

	output.textContent += val;
}

function backspace() {
	let val = output.textContent.split('');

	val.pop();
	output.textContent = val;
}

function runIt() {
	let val = output.textContent;

	output.textContent = eval(val);
}
