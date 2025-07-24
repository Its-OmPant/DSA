/**
 * PS: Write a program to print your name N times using recursion
 */

import { println } from "../Utilities/output.js";

function printNTimes(data, n) {
	if (n == 0) return;
	println(data);
	printNTimes(data, --n);
}

let name = "Om";

printNTimes(name, 5);
