/*
Pattern 12 Digit Crown Pattern
------------------------------
1      1 
12    21
123  321
12344321
------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printDigitCrown(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= 2 * rows; j++) {
			if (j <= i || j > 2 * rows - i) {
				let digit = j <= i ? j : 2 * rows + 1 - j;
				print(digit);
			} else {
				print(" ");
			}
		}
		printLine();
	}
}

printDigitCrown(4);
