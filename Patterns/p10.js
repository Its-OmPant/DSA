/*
Pattern 10: Vertical Half Pyramid
---------------------------------
*
**
***
****
*****
****
***
**
*
---------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printVerticalHalfPyramid(rows) {
	let row_half = Math.floor(rows / 2);

	if (rows % 2 == 0) {
		printUpperHalf(row_half);
		printLowerHalf(row_half);
	} else {
		printUpperHalf(row_half);
		print("*", row_half + 1);
		printLine();
		printLowerHalf(row_half);
	}
}

printVerticalHalfPyramid(9);

// helper functions
function printUpperHalf(rows) {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < i + 1; j++) {
			print("*");
		}
		printLine();
	}
}

function printLowerHalf(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= rows + 1 - i; j++) {
			print("*");
		}
		printLine();
	}
}
