/*
Pattern 5: Reverse Left Skewed Pyramid
--------------------------------------
*****
****
***
**
*
--------------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printReverseLeftSkewedPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= rows + 1 - i; j++) {
			print("*");
		}
		printLine();
	}
}

printReverseLeftSkewedPyramid(5);
