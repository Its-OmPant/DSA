/**
 Pattern 7 Full Pyramid
------------------------
     *     
    ***    
   *****   
  *******  
 ********* 
***********
------------------------
*/

import { print, printLine } from "../Utilities/output.js";

function printFullPyramid(rows) {
	for (let i = 1; i <= rows; i++) {
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

printFullPyramid(5);
