/**
 * Problem Statement: Given an integer N, return true if it is a palindrome else return false.
 * A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.
 */

import { println } from "../Utilities/output.js";

function checkPalindrom(number) {
	let reverse = reverse_number(number);

	if (number == reverse) {
		println(`${number} is palindrom number.`);
	} else {
		println(`${number} is not a palindrom number.`);
	}
}

checkPalindrom(121);
checkPalindrom(1331);
checkPalindrom(124421);
checkPalindrom(19278);
checkPalindrom(0);
checkPalindrom(-87);
checkPalindrom(-1331);

// helper functions
function reverse_number(number) {
	if (number == 0) {
		return 0;
	}
	let sign = 0;
	if (number < 0) {
		number = number * -1;
		sign = 1;
	}

	let reverse = 0;

	while (number > 0) {
		let rem = number % 10;
		reverse = reverse * 10 + rem;
		number = Math.floor(number / 10);
	}

	return sign == 0 ? reverse : -reverse;
}
