/*
Pattern 17: Repeating Alpha Pyramid
-----------------------------------
   A
  ABA
 ABCBA
ABCDCBA
-----------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printRepeatingAlphaPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		let code = 65;

		for (let j = 1; j < 2 * rows; j++) {
			if (j >= rows + 1 - i && j < rows + i) {
				print(String.fromCharCode(code));

				code = j >= rows ? code - 1 : code + 1;
			} else {
				print(" ");
			}
		}
		printLine();
	}
}

printRepeatingAlphaPyramid(4);
