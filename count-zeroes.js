/** Given an array of 1s and 0s which has all 1s first followed by all 0s, 
 * write a function called countZeroes, which returns the number of zeroes in the array.
 */

function countZeroes(arr) {
  const firstZeroIdx = findFirst(arr);
  if (firstZeroIdx === -1) {
    return 0;
  }
  return arr.length - firstZeroIdx;
}

/** Find the first idx of 0 in arr */
function findFirst(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

  // all values in the array are 0s
  if (arr[leftIdx] === 0) return 0;

  // array has no 0s
  if (arr[leftIdx] && arr[rightIdx]) return -1; 

  while (leftIdx <= rightIdx) {
    // values at leftIdx and middleIdx both 1
    if (arr[leftIdx] && arr[middleIdx]) {
      if (arr[middleIdx + 1] === 0) {
        return middleIdx + 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    }
    // value at middleIdx is 0
    if (arr[middleIdx] === 0) {
      if (arr[middleIdx - 1] === 1) {
        return middleIdx;
      } else {
        rightIdx = middleIdx - 1;
      }
    }

    middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  }
}


console.log(countZeroes([1, 1, 1, 1, 0, 0]));  // 2
console.log(countZeroes([1, 0, 0, 0, 0]));  // 4
console.log(countZeroes([0, 0, 0]));  // 3
console.log(countZeroes([1, 1, 1, 1]));  // 0

module.exports = countZeroes