/**
 * Bubble Sort:
 * Bubble sort works by pushing the element
 * to last by adjacent swapping.
 *
 * TC: O(n^2) in all, but can be optimized for best case i.e (where array is already sorted,
 *  in that case no swap will occur in 1st iteration so we can check for that.)
 *
 */

import { print, printLine } from "../Utilities/output.js";

// implements bubble sort
function sort(array) {
	let elements = [...array];
	let size = elements.length;

	for (let i = 0; i < size; i++) {
		let didSwap = 0;
		for (let j = 0; j < size - i; j++) {
			if (elements[j] > elements[j + 1]) {
				let temp = elements[j];
				elements[j] = elements[j + 1];
				elements[j + 1] = temp;
				didSwap = 1;
			}
		}
		if (didSwap == 0) {
			break;
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
