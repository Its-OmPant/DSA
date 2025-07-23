/*
Pattern 19: Hollow Diamond Pattern
----------------------------------
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
----------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printHollowDiamond(rows) {
	if (rows % 2 != 0) {
		console.log("This pattern requires rows to be even..");
		return;
	}
	let half_rows = Math.floor(rows / 2);
	printUpperHollowDiamond(half_rows);
	printLowerHollowDiamond(half_rows);
}

printHollowDiamond(10);

// helper functions
function printUpperHollowDiamond(rows) {
	for (let i = 1; i <= rows; i++) {
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

function printLowerHollowDiamond(rows) {
	for (let i = 1; i <= rows; i++) {
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
