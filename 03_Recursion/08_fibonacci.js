/**
 * Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.
 */

import { input } from "../Utilities/input.js";
import { println, print } from "../Utilities/output.js";

function printFibonacci(num) {
	// not implemeted yet
}

async function main() {
	let num = Number(await input("Enter a number: "));
	if (Number.isNaN(num) || num < 0) {
		println("Please Enter a valid number!");
		return;
	}
	printFibonacci(num);
}

main();
