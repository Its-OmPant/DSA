/*
Pattern 15: Reverse Alphabet Pyramid
------------------------------------
ABCDE
ABCD
ABC
AB
A
------------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printReverseAlphabetPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
		let code = 65;
		for (let j = 1; j <= rows + 1 - i; j++) {
			print(String.fromCharCode(code++));
		}
		printLine();
	}
}

printReverseAlphabetPyramid(5);
