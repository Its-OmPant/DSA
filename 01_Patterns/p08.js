/*
Pattern 8: Reverse Full Pyramid
-------------------------------
*********
 ******* 
  *****  
   ***   
    *    
-------------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printReverseFullPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
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

printReverseFullPyramid(5);
