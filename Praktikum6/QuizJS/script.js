const output = document.getElementById('output');
const operations = [];

function clearOutput() {
	output.textContent = 0;
}

function setNumber(val) {
	let last = output.textContent[output.textContent.length - 1];
	if (
		isNaN(val) &&
		!Number.isInteger(parseFloat(val)) &&
		isNaN(last) &&
		!Number.isInteger(parseFloat(last)) &&
		last != ')'
	) {
		if (val != '(') return;
	}

	if (output.textContent == 0 || output.textContent == 'error')
		output.textContent = '';

	output.textContent += val;
}

function backspace() {
	if (output.textContent == 'error') {
		output.textContent = '0';
		return;
	}

	let val = output.textContent.split('');

	val.pop();

	output.textContent = val.join('');

	if (val.length == 0) output.textContent = 0;
}

function runIt() {
	let val = output.textContent;

	output.classList.add('fade');
	setTimeout(() => {
		output.classList.remove('fade');
	}, 550);
	try {
		output.textContent = eval(val);
	} catch (err) {
		output.textContent = 'error';
	}
}
