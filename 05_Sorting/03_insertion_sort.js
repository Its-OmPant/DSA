/**
 * Insertion Sort:
 * Insertion Sort takes an element and places it in it's correct position.
 *
 * TC: O(n^2) for best and average case.
 *     O(n) For best case -> when array is already sorted
 */

import { print, printLine } from "../Utilities/output.js";

// implements insertion sort
function sort(array) {
	let elements = [...array];
	let size = elements.length;

	for (let i = 0; i < size; i++) {
		let j = i;
		while (j > 0 && elements[j - 1] > elements[j]) {
			let temp = elements[j - 1];
			elements[j - 1] = elements[j];
			elements[j] = temp;
			j--;
		}
	}
	return elements;
}

function main() {
	let array1 = [23, 45, 67, 3, 4, 98, 7, 65];
	let array2 = [90, -78, -65, 45, 32, 0, 98, 67, 0, -9, -9];

	print(sort(array1));
	printLine();
	print(sort(array2));
}

main();
