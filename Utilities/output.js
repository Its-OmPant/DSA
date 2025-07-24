// output related utility functions

function print(data, repeat = 1) {
	/**
	 * Prints the output without a new line.
	 * @param {any} data - Data to be printed
	 * @param {number} repeat - Number of time the data to be printed (as a continuous string), Default 1.
	 */
	let strData = String(data);
	if (repeat == 0) return;
	if (repeat > 1) {
		for (let i = 1; i <= repeat; i++) {
			process.stdout.write(strData);
		}
	} else {
		process.stdout.write(strData);
	}
}

function println(data, repeat = 1) {
	/**
	 * Prints the output with a new line at the end.
	 * @param {any} data - Data to be printed
	 * @param {number} repeat - Number of time the data to be printed (as a continuous string), Default 1.
	 */
	let strData = String(data);
	if (repeat == 0) return;
	if (repeat > 1) {
		for (let i = 1; i <= repeat; i++) {
			console.log(strData);
		}
	} else {
		console.log(strData);
	}
}

function printLine() {
	/**
	 * Prints a new line to terminal.
	 */
	process.stdout.write("\n");
}

export { print, println, printLine };
