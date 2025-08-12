/**
 * Quick Sort:
 * Quick sort is two pointer based sorting algo.
 * Intuition: 1 - Pick pivot, place it at its right place
 *            2 - Smaller goes left to pivot, larger gets right to pivot and repeat.
 *
 * Four variations base on pivot selection
 * - First element as pivot
 * - Last element as pivot
 * - Middle element as pivot
 * - Random element as pivot
 */

function sort(array, low, high) {
	if (low < high) {
		let i = 0;
		let j = high;

		let pivot = array[low];
		while (j >= i) {
			if (array[i] > pivot && array[j] <= pivot) {
				let temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}

			if (array[i] <= pivot) {
				i++;
			}
			if (array[j] > pivot) {
				j--;
			}
		}
		let temp = array[j];
		array[j] = pivot;
		array[low] = temp;

		sort(array, low, j - 1);
		sort(array, j + 1, high);
		return array;
	}
}

function main() {
	let array1 = [23, 45, 67, 3, 4, 98, 7, 65, 14];
	let array2 = [90, -78, -65, 45, 32, 0, 98, 67, 0, -9, -9];
	console.log(sort(array1, 0, array1.length - 1));
	console.log(sort(array2, 0, array2.length - 1));
}

main();
