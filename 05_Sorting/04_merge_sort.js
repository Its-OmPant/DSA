/**
 * Merge Sort:
 * Merge sort is a Divide and conquer based algorithm for sorting
 */

import { print, printLine } from "../Utilities/output.js";

function merge(array1, array2) {
	let result = [];

	let i = 0;
	let j = 0;

	while (i < array1.length && j < array2.length) {
		if (array1[i] < array2[j]) {
			result.push(array1[i]);
			i++;
		} else {
			result.push(array2[j]);
			j++;
		}
	}

	for (i; i < array1.length; i++) {
		result.push(array1[i]);
	}

	for (j; j < array2.length; j++) {
		result.push(array2[j]);
	}
	return result;
}

// [4,2,3] [4,5]

function sort(array) {
	if (array.length == 1) {
		return array;
	}

	let elements = [...array];
	let mid = Math.ceil(elements.length / 2);

	let first_half = sort(elements.slice(0, mid));
	let second_half = sort(elements.slice(mid));

	return merge(first_half, second_half);
}

function main() {
	let array1 = [23, 45, 67, 3, 4, 98, 7, 65, 14];
	let array2 = [90, -78, -65, 45, 32, 0, 98, 67, 0, -9, -9];
	console.log(sort(array1));
	console.log(sort(array2));
}

main();
