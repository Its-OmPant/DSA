/**
 * PS: Find factorial of a number using recursion
 */

import { input } from "../Utilities/input.js";
import { println } from "../Utilities/output.js";

function factorial(number) {
	if (number == 0 || number == 1) {
		return 1;
	}
	let fact = number * factorial(number - 1);
	return fact;
}

async function main() {
	let num = Number(await input("Enter a number: "));
	if (Number.isNaN(num) || num < 0) {
		println("Please enter a valid number");
		return;
	}
	println(factorial(num));
}

main();
