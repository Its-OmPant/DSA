// output related utility functions

function print(data, repeat = 1) {
	/**
	 * Prints the output without a new line.
	 * @param {any} data - Data to be printed
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

function printLine() {
	/**
	 * Prints a new line to terminal.
	 */
	process.stdout.write("\n");
}

export { print, printLine };
