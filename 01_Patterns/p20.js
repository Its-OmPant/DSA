/*
Pattern 19:Buttterfly Pattern
----------------------------------
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
----------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printButterfly(rows) {
	let half_rows = Math.floor(rows / 2);

	// passing row+1 to skip the last and first row from Upper and Lower pattern
	// to incorporate middle row incase of odd row number
	if (rows % 2 !== 0) {
		printUpperButterfly(half_rows + 1);
		let odd_stars_count = (half_rows + 1) * 2;
		print("*", odd_stars_count);
		printLine();
		printLowerButterfly(half_rows + 1);
	} else {
		printUpperButterfly(half_rows + 1);
		printLowerButterfly(half_rows + 1);
	}
}

printButterfly(9);

// helper functions
function printUpperButterfly(rows) {
	for (let i = 1; i < rows; i++) {
		for (let j = 1; j <= 2 * rows; j++) {
			if (j <= i || j >= 2 * rows + 1 - i) {
				print("*");
			} else {
				print(" ");
			}
		}
		printLine();
	}
}

function printLowerButterfly(rows) {
	for (let i = 2; i <= rows; i++) {
		for (let j = 1; j <= 2 * rows; j++) {
			if (j <= rows + 1 - i || j >= rows + i) {
				print("*");
			} else {
				print(" ");
			}
		}
		printLine();
	}
}
