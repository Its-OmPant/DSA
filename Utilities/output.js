// output related utility functions

function print(data) {
	/**
	 * Prints the output without a new line.
	 * @param {any} data - Data to be printed
	 */
	let strData = String(data);
	process.stdout.write(strData);
}

function printLine() {
	/**
	 * Prints a new line to terminal.
	 */
	process.stdout.write("\n");
}

export { print, printLine };
