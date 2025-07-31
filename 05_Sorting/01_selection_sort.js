/**
 * Selection Sort Implementation:
 * Selection sort as it's name suggests selects the minimum/maximum
 * (depending on order) and swaps
 * TC: O(n^2) for all cases
 */

import { print, printLine } from "../Utilities/output.js";

// implements selection sort
function sort(array) {
	let elements = [...array];
	let size = elements.length;

	for (let i = 0; i < size; i++) {
		let min = i;
		for (let j = i; j < size; j++) {
			if (elements[j] < elements[min]) {
				min = j;
			}
		}
		let temp = elements[i];
		elements[i] = elements[min];
		elements[min] = temp;
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
