/**
 * PS Print numbers from N to 1 using recursion
 */

import { input } from "../Utilities/input.js";
import { println } from "../Utilities/output.js";

function printNToOne(num) {
	if (num == 1 || num == 0) {
		println(num);
		return;
	}
	println(num);
	printNToOne(num - 1);
}

async function main() {
	let num = Number(await input("Enter a number: "));
	if (Number.isNaN(num) || num < 0) {
		println("Please Enter a valid number!");
		return;
	}
	printNToOne(num);
}

main();
