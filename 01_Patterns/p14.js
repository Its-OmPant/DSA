/*
Pattern 14: Alphabet Pyramid
----------------------------
A
AB
ABC
ABCD
ABCDE
----------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printAlphabetPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		let code = 65;
		for (let j = 1; j <= i; j++) {
			print(String.fromCharCode(code++));
		}
		printLine();
	}
}

printAlphabetPyramid(5);
