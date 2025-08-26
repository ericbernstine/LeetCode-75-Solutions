var longestOnes = function (nums, k) {
  let left = 0;
  let zeroCount = 0;
  let output = 0;

  // Loop over entire array, in this case (i) or the current iteration will always be the rightmost value of the window. 
  for (let right = 0; right < nums.length; right++) {
    // If we encounter a zero, increment zeroCount. We need to keep track of how many zeros are counted as it is the max number subArray of ones with k given amount of zeros. 
    if (nums[right] === 0) {
      zeroCount++;
    }    
    // While the zeroCount is greater than k, we need to move left up until we find another zero, then that point will become the left value of the window. 
    while (zeroCount > k) {
      if (nums[left] === 0){
        zeroCount--;
      }
      left++;
      // Why calculate difference again?
      // We just updated the left value, if we don't calculate the difference again, it will be based off the previous left value. 
      
    }
    // Calculate the difference on each iteration. 
    let difference = right - left + 1; 
    // Compare the current difference to output, update only if the output is less than the difference. Then return output. 
    output = Math.max(difference, output)
  }
  return output
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
// Output: 6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));
// Output: 10
console.log(longestOnes([1,1,1,1,1,1], 2))
// 6
console.log(longestOnes([0,0,0,0,0,0], 3))
// 3
console.log(longestOnes([1,0,0,1,0,1,0,1], 4))
// 8
console.log(longestOnes([1,0,1,0,1,0,1,0], 2))
// 5



// Notes:
// - Loop over array with sliding window approach.
//   - Keep pushing right var until you reach a 0 of count k. Then calculate the given length of that subArray.
// - When the right 0 = k, calculate and compare the difference between the current window and the current max window.
// - Return the max window.

// Notes v.2
// Loop over the array only looking for zeros. If it is the first zero we see, make that index the lastZero value and keep moving
// if it is the second zero, but still under k, we continue moving.
// If it is the zero count equal to k, calucalte the difference between the lastZero and the current index.
// Now set lastZero to the current iteration.
