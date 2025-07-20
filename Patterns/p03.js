/*
Pattern 3 Right Skewed Digit Pyramid
-------------------------------------
1
12
123
1234
12345
--------------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printRightSkewedDigitPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			print(j);
		}
		printLine();
	}
}

printRightSkewedDigitPyramid(5);
