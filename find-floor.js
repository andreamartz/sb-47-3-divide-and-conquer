/** Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x.
*/ 

/** Steps to solve:
 * - binary search
 *   - is arr[mid] <= num?
 *     - if yes:
 *       - is arr[mid + 1] <= num?
 *         - if yes: move to right half of array
 *         - if no: return arr[mid]
 *     - if no:
 *       - is arr[mid - 1] <= num?
 *         - if yes: return arr[mid - 1]
 *         - if no: move to left half of array

 */

function findFloor(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  // floor does not exist
  if (num < arr[low]) return -1;

  // floor is last element of array
  if (arr[high] <= num) return arr[high];

  while(low < high) {
    mid = Math.floor((low + high) / 2);
    
    if (arr[mid] <= num) {
      if (arr[mid + 1] > num) {
        return arr[mid];   // found floor
        // search right side
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid - 1] <= num) {
        return arr[mid - 1];   // found floor
        // search left side
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(findFloor([1,2,8,10,10,12,19], 9)); // 8
console.log(findFloor([1,2,8,10,10,12,19], 20)); // 19
console.log(findFloor([1,2,8,10,10,12,19], 0)); // -1

module.exports = findFloor