/**
 * Given an array of size N. Find the highest and lowest frequency element
 */

import { printLine, println } from "../Utilities/output.js";

function printMinMax(array) {
	/**
	 * Prints min max occuring elements
	 * if frequency for two element is same the first one will get printed
	 *
	 */
	let frequencies = new Map();

	for (let elem of array) {
		if (frequencies.has(elem)) {
			let value = frequencies.get(elem);
			frequencies.set(elem, ++value);
		} else {
			frequencies.set(elem, 1);
		}
	}

	let max = Number.MIN_SAFE_INTEGER;
	let min = Number.MAX_SAFE_INTEGER;
	let maxKey;
	let minKey;

	console.log(frequencies);

	for (let [key, value] of frequencies.entries()) {
		if (value > max) {
			maxKey = key;
			max = value;
		}

		if (value < min) {
			minKey = key;
			min = value;
		}
	}
	println(`Min: ${minKey}, Max: ${maxKey}`);
}

function main() {
	let arr = [1, 2, 4, 2, 1, 5, 6, 76, 56, 76, 75, 98, 4, 3, 2, 1, 0];
	let arr2 = [45, 78, 98, 65, 78];

	printMinMax(arr);
	printLine();
	printMinMax(arr2);
}

main();
