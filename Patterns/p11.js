/*
Pattern 11 - Binary Pyramid
1
0 1
1 0 1
0 1 0 1
1 0 1 0 1
*/

import { print, printLine } from "../Utilities/output.js";

function printBinaryPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		let start_value = i % 2;
		let digit = start_value;
		for (let j = 1; j <= i; j++) {
			print(digit + " ");
			digit = +!digit;
		}
		printLine();
	}
}

printBinaryPyramid(5);
