/**
 * PS: Given an array, we have found the number of occurrences of each element in the array.
 */

import { printLine, println } from "../Utilities/output.js";

function printFrequencies(array) {
	let frequencies = new Map();

	for (let elem of array) {
		if (frequencies.has(elem)) {
			let value = frequencies.get(elem);
			frequencies.set(elem, ++value);
		} else {
			frequencies.set(elem, 1);
		}
	}
	for (const [key, value] of frequencies.entries()) {
		println(`${key} -> ${value}`);
	}
}

function main() {
	let arr = [1, 2, 4, 2, 1, 5, 6, 76, 56, 76, 75, 98, 4, 3, 2, 1, 0];
	let arr2 = [45, 78, 98, 65, 78];

	printFrequencies(arr);
	printLine();
	printFrequencies(arr2);
}

main();
