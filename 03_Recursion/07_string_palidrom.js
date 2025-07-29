/**
 * Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.
 */

import { println } from "../Utilities/output.js";

// approach 1: via builtin method
function checkPalindromString(string) {
	let reverse = string.split("").reverse().join("");
	console.log(reverse);
	if (string === reverse) return true;
	else return false;
}

// approach 2: via two pointers

function checkPalindromString2(string) {
	let len = string.length;
	let middle = Math.floor(len / 2);

	for (let i = 0, j = len - 1; i < middle; i++, j--) {
		if (string[i] !== string[j]) {
			return false;
		}
	}
	return true;
}

//approach 3: via recursion (same as iterative two pointer)

function checkPalindromString3(string) {
	// not implememted
}

function main() {
	let str = "ABCBA";
	let str2 = "Hello";

	println(checkPalindromString2(str));
	println(checkPalindromString2(str2));
}

main();
