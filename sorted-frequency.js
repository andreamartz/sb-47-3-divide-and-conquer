/** Given a sorted array and a number, write a function called sortedFrequency
 * that counts the occurrences of the number in the array.
 * 
 * fcns to find first or last occurrence of num - Consider three cases:
 * - middle value is the correct one
 * - correct index is to the left of the middle value
 * - correct index is to the right of the middle value
 * - num is not in the array
 */

function sortedFrequency(arr, num) {
  const firstIdx = findFirst(arr, num);
  const lastIdx = findLast(arr, num);
  if (firstIdx === -1 || lastIdx === -1) return -1;  // seems like I should return 0, but the test says -1

  return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
  let midIdx = Math.floor((lowIdx + highIdx) / 2);

  // num is not in array
  if (arr[lowIdx] > num || arr[highIdx] < num) return -1; 

  while (lowIdx <= highIdx) {
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
    midIdx = Math.floor((lowIdx + highIdx) / 2);
  }
}

function findLast(arr, num, lowIdx = 0, highIdx = arr.length - 1) {
  let midIdx = Math.floor((lowIdx + highIdx) / 2);

  // num is not in array
  if (arr[lowIdx] > num || arr[highIdx] < num) return -1; 

  while (lowIdx <= highIdx) {
    // midIdx is correct one
    if ((midIdx === arr.length - 1 || arr[midIdx + 1] > num) && arr[midIdx] === num) {
      return midIdx;
    // correct idx is higher than midIdx
    } else if (arr[midIdx] === num || arr[midIdx] < num) {
      lowIdx = midIdx + 1;
    // correct idx is lower than midIdx
    } else {
      highIdx = midIdx - 1;
    }
    midIdx = Math.floor((lowIdx + highIdx) / 2);
  }
}


console.log(sortedFrequency([1,1,2,2,2,2,3], 2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3], 3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3], 1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3], 4)) // -1

console.log(sortedFrequency([1,1,1,4,4,4,4,4,4,5,6,9,9,9,9,50,50], 1)) // 3
console.log(sortedFrequency([1,1,1,4,4,4,4,4,4,5,6,9,9,9,9,50,50], 4)) // 6
console.log(sortedFrequency([1,1,1,4,4,4,4,4,4,5,6,9,9,9,9,50,50], 5)) // 1
console.log(sortedFrequency([1,1,1,4,4,4,4,4,4,5,6,9,9,9,9,50,50], 6)) // 1
console.log(sortedFrequency([1,1,1,4,4,4,4,4,4,5,6,9,9,9,9,50,50], 9)) // 4
console.log(sortedFrequency([1,1,1,4,4,4,4,4,4,5,6,9,9,9,9,50,50], 50)) // 2

module.exports = sortedFrequency