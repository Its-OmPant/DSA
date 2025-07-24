/**
 * Problem Statement: Given an integer N return the reverse of the given number.
 *  Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.
 */

import { println } from "../Utilities/output.js";

// approach 1 Using Maths
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

// approach 2 via string conversion
function reverse_number2(number) {
	if (number == 0) {
		return 0;
	}
	let sign = 0;
	if (number < 0) {
		number = number * -1;
		sign = 1;
	}
	let strNum = String(number);
	let digits = strNum.split("").reverse();

	let strReverse = digits.join("");

	return sign == 0 ? Number(strReverse) : -Number(strReverse);
}

println(reverse_number(143));
println(reverse_number(0));
println(reverse_number(-98));
println(reverse_number(11234));
println(reverse_number(112300));
println(reverse_number(1106503009));
