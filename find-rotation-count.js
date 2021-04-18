/** Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Fiven such an array, find the value of n. 
*/

/** Steps to solve:
 * - find the idx of the pivot
 * - count the number of elements before the pivot
 */

function findRotationCount(arr, lowIdx = 0, highIdx = arr.length - 1) {
  // edge cases to return 0
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

  let midIdx;

  while (lowIdx <= highIdx) {
    midIdx = Math.floor((lowIdx + highIdx) / 2);

    // lowValIdx found
    if (arr[midIdx - 1] > arr[midIdx]) {
      return midIdx;
    // correct idx is lower than midIdx
    } else if (arr[midIdx] < arr[highIdx]) {
      highIdx = midIdx - 1;
    // correct idx is higher than midIdx
    } else {
      lowIdx = midIdx + 1;
    }
  }
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
console.log(findRotationCount([3, 4, 5, 1, 2])); // 3

module.exports = findRotationCount