/*
Pattern 9: Diamond
------------------
     *     
    ***    
   *****   
  *******  
 ********* 
 *********
  ******* 
   *****  
    ***   
     * 
------------------
*/
import { print, printLine } from "../Utilities/output.js";

function printDiamond(rows) {
	let row_half = Math.floor(rows / 2);

	if (rows % 2 == 0) {
		printUpperDiamond(row_half);
		printLowerDiamond(row_half);
	} else {
		printUpperDiamond(row_half, 1);
		print("*", 2 * row_half + 1); // stars = 2* (row-num/2) + 1 [for any row]
		printLine();
		printLowerDiamond(row_half, 1);
	}
}

printDiamond(10);

// helper functions
function printUpperDiamond(rows, indent = 0) {
	for (let i = 1; i <= rows; i++) {
		print(" ", indent);
		for (let j = 1; j <= 2 * rows - 1; j++) {
			if (j > rows - i && j < rows + i) {
				print("*");
			} else {
				print(" ");
			}
		}
		printLine();
	}
}

function printLowerDiamond(rows, indent = 0) {
	for (let i = 1; i <= rows; i++) {
		print(" ", indent);
		for (let j = 1; j <= 2 * rows - 1; j++) {
			if (j >= i && j <= 2 * rows - i) {
				print("*");
			} else {
				print(" ");
			}
		}
		printLine();
	}
}
