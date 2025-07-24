/**
 * PS: Print Sum of first N natural numbers using Recursion
 */

import { input } from "../Utilities/input.js";
import { println } from "../Utilities/output.js";

function sumOfN(n) {
	let sum = 0;
	if (n == 1) {
		return n;
	}
	sum = n + sumOfN(n - 1);
	return sum;
}

async function main() {
	let num = Number(await input("Enter a number: "));
	if (Number.isNaN(num) || num <= 0) {
		println("Please enter a valid number");
		return;
	}
	println(sumOfN(num));
}

main();
