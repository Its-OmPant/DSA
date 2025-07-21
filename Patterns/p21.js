/**
Pattern 21: Empty square Pattern
--------------------------------
 *  *  *  * 
 *        * 
 *        * 
 *  *  *  * 
--------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printEmptySquare(rows) {
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= rows; j++) {
			if (i == 1 || i == rows) {
				print(" * ");
			} else {
				if (j == 1 || j == rows) {
					print(" * ");
				} else {
					print("   ");
				}
			}
		}
		printLine();
	}
}

printEmptySquare(4);
