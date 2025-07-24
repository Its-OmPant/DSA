import readline from "node:readline";

function input(query = "") {
	/**
	 * Takes user input synchronnously
	 * @param {string} query - Message to print while taking input
	 */

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	return new Promise((resolve, reject) => {
		rl.question(query, (input) => {
			rl.close();
			resolve(input);
		});
	});
}

export { input };
