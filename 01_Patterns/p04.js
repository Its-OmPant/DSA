/*
 Pattern 4 Right Skewed Increasing Digits Pyramid.
 --------------------------------------------------
 1
 22
 333
 4444
 55555
 --------------------------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printRightSkewedIncreasingDigitPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			print(i);
		}
		printLine();
	}
}

printRightSkewedIncreasingDigitPyramid(5);
