/*
Pattern 2 (Right Skewed Pyramid)
----------
*
**
***
****
*****
----------
*/

import { print, printLine } from "../Utilities/output.js";

function printRightSkewedPyramid(rows) {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < i + 1; j++) {
			print("*");
		}
		printLine();
	}
}

printRightSkewedPyramid(5);
