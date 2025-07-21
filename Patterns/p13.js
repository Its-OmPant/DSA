/*
Pattern 13: Increasing Digit Pyramid
------------------------------------
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
------------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printIncreasingDigitPyramid(rows) {
	let digit = 1;
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			print(digit++ + " ");
		}
		printLine();
	}
}

printIncreasingDigitPyramid(5);
