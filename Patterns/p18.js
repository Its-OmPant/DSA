/*
Pattern 18: Reverse-alpha Pyramid
---------------------------------
E
DE
CDE
BCDE
ABCDE
---------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printReversealphatPyramid(rows) {
	if (rows < 1 || rows > 26) {
		console.log("Please enter valid row number (1-26).");
		return;
	}
	let code = 64 + rows;
	for (let i = 1; i <= rows; i++) {
		let j;
		for (j = 1; j <= i; j++) {
			print(String.fromCharCode(code++));
		}
		printLine();
		code = code - j;
	}
}

printReversealphatPyramid(5);
