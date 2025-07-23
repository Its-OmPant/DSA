/*
Pattern 1 (N*N Forest Pattern)
---------
*****
*****
*****
*****
*****
---------
*/
import { print, printLine } from "../Utilities/output.js";

function printForest(rows) {
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < rows; j++) {
			print("*");
		}
		printLine("\n");
	}
}

printForest(5);
