/**
 * PS: Print from 1 - N using recursion
 */

import { input } from "../Utilities/input.js";
import { println } from "../Utilities/output.js";

function printOneToN(n) {
	if (n == 1 || n == 0) {
		println(n);
		return;
	}
	printOneToN(n - 1);
	println(n);
}

async function main() {
	let num = Number(await input("Enter a number: "));
	if (Number.isNaN(num) || num < 0) {
		println("Please enter a valid number");
		return;
	}
	printOneToN(num);
}

main();
