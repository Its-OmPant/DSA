/*
Pattern 6: Reverse Left Skewed Digit Pyramid
--------------------------------------------
12345
1234
123
12
1
--------------------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printReverseLeftSkewedPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= rows + 1 - i; j++) {
			print(j);
		}
		printLine();
	}
}

printReverseLeftSkewedPyramid(5);
