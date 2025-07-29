/**
 * Problem Statement: You are given an array. The task is to reverse the array and print it.
 */

import { println } from "../Utilities/output.js";

// approach 1: via swapping
function reverseArray(array) {
	const duplicate = [...array];

	let start = 0;
	let end = duplicate.length - 1;

	for (; start < end; start++, end--) {
		// swapping first and last value
		let temp = duplicate[start];
		duplicate[start] = duplicate[end];
		duplicate[end] = temp;
	}
	return duplicate;
}

// approach 2: via builtin reverse
function reverseArray2(array) {
	return [...array].reverse();
}

// approach 3: using for loop
function reverseArray3(array) {
	let result = [];

	for (let i = 0, j = array.length - 1; j >= 0; j--, i++) {
		result[i] = array[j];
	}
	return result;
}

// approach 4: using recursion (mutates original array,
// delets all element from it, not the best soln)
function reverseArray4(array) {
	if (array.length == 0) return [];
	let lastItem = array.pop();
	return [lastItem, ...reverseArray4(array)];
}

//approach 5: using recursion (doesn't mutates original array)
function reverseArray5(array, length) {
	if (length == 0) return [];
	return [array[length - 1], ...reverseArray5(array, length - 1)];
}

// approach 6: using recursion (same as iterative swapping but via recusrion,
// *Mutates original array-> reverses it al well as returning a reversed array)
function reverseArray6(array, start, end) {
	if (start > end) return;

	let temp = array[start];
	array[start] = array[end];
	array[end] = temp;

	reverseArray6(array, start + 1, end - 1);
	return array;
}
function main() {
	let arr = [1, 2, 3, 4, 5];
	let arr2 = [1, 2, 3, 4, 5, 6];

	println(reverseArray(arr));
	println(reverseArray(arr2));

	// println(reverseArray2(arr));
	// println(reverseArray2(arr2));

	// println(reverseArray3(arr));
	// println(reverseArray3(arr2));

	// mutates the original array()
	// println(reverseArray4(arr));
	// println(reverseArray4(arr2));

	// println(reverseArray5(arr, arr.length));
	// println(reverseArray5(arr2, arr2.length));

	// println(reverseArray6(arr, 0, arr.length - 1));
	// println(reverseArray6(arr2, 0, arr2.length - 1));

	println(arr);
	println(arr2);
}

main();
