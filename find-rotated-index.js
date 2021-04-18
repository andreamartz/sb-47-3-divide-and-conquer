/** Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return 1. */

/** My assumptions: 
 * - the values in the array are all unique
 * - the values in the array are all integers
 * - the sorting direction of the unrotated array is ascending
 */

/** Steps to solve:
 * - find the first index where the value is smaller than the previous one (lowValIdx)
 * - use divide and conquer to find the index of num 
 */

function findRotatedIndex(arr, num) {
  const lowValIdx = findLowValIdx(arr);
  
  // num is not in the array
  if (arr.length === 0) return -1;
  if (lowValIdx > 0 && 
    (num < arr[lowValIdx] || num > arr[lowValIdx - 1])) {
    return -1;
  }

  if (lowValIdx === 0) {
    // do binary search on entire arr
    return binarySearch(arr, num);
  } else if (num < arr[arr.length - 1]) {
    // do binary search in low array values
    return binarySearch(arr, num, lowValIdx, arr.length - 1);
  } else {
    // do binary search in high array values
    return binarySearch(arr, num, 0, lowValIdx - 1);
  }
}

function binarySearch(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
  // num is not in array
  if (arr.length === 0) return -1;
  if (num < arr[lowIdx] || num > arr[highIdx]) return -1; 

  let midIdx;
  while (lowIdx <= highIdx) {
    midIdx = Math.floor((lowIdx + highIdx) / 2);
    // midIdx is correct one
    if ((midIdx === 0 || arr[midIdx - 1] < num) && arr[midIdx] === num) {
      return midIdx;
    // correct idx is lower than midIdx
    } else if (arr[midIdx] === num || arr[midIdx] > num) {
      highIdx = midIdx - 1;
    // correct idx is higher than midIdx
    } else {
      lowIdx = midIdx + 1;
    }
  }
  return -1;
}

function findLowValIdx(arr) {
  // edge cases to return 0
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

  let lowIdx = 0;
  let highIdx = arr.length - 1;
  let midIdx;;

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


console.log(findRotatedIndex([3,4,1,2], 4)); // 1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 8)); // 2
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 3)); // 6
console.log(findRotatedIndex([37,44,66,102,10,22], 14)); // -1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 12)); // -1

module.exports = findRotatedIndex