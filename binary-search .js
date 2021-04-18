function binarySearch(arr, target) {
  // set starting values for left and right indices
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    console.log("LEFTIDX: ", leftIdx, "MIDDLEIDX: ", middleIdx, "RIGHTIDX: ", rightIdx);
    const middleValue = arr[middleIdx];

    // compare target to the middle value
    // reset leftIdx and rightIdx as necessary
    if (target === middleValue) {
      return middleIdx;
    } else if (target < middleValue) { 
      rightIdx = middleIdx - 1;
    } else {
      leftIdx = middleIdx + 1;
    }
  }
  return -1;
}

console.log(binarySearch ([3, 4, 7, 10, 11, 14, 20, 26, 27, 40], 4));
console.log(binarySearch ([3, 4, 7, 10, 11, 14, 20, 26, 27, 40], 7));
console.log(binarySearch ([3, 4, 7, 10, 11, 14, 20, 26, 27, 40], 39));