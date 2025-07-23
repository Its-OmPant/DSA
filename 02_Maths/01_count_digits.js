/*  PS: You are given an integer n. You need to return the number of digits in the number.
    - The number will have no leading zeroes, except when the number is 0 itself.
*/

// approach 1: Best TC = O(1)
function countDigits(num) {
	let num_str = String(num);
	if (num < 0) {
		num_str = num_str.slice(1);
	}
	return num_str.length;
}

//approach 2: Brute t O(Log n base 10)
function countDigits2(num) {
	let count = 0;
	if (num == 0) {
		return 1;
	} else if (num < 0) {
		num *= -1; // converting -ve to +ve
	}
	while (num > 0) {
		num = Math.floor(num / 10);
		count++;
	}
	return count;
}

// approach 3: best tc O(1)
function countDigits3(num) {
	return Math.floor(Math.log10(num) + 1);
}

let inputs = [1, 34, 8, 765, 98076, 0, -76];

for (let i of inputs) {
	console.log(`Digits in ${i} are: ${countDigits2(i)}`);
}
