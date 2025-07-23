/*
Pattern 16: Albhabet Pyramid 2
------------------------------
A
BB
CCC
DDDD
EEEEE
------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printAlphabetPyramid2(rows) {
	let code = 65;
	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= i; j++) {
			print(String.fromCharCode(code));
		}
		printLine();
		code++;
	}
}

printAlphabetPyramid2(5);
