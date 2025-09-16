var longestSubarray = function(nums) {
  // Overthought the hell out of this one. ALWAYS break the problem down to it's simplest form. 
  // Account for the array of only ones
  if (!nums.includes(0)){
    return nums.length - 1; 
  }
  // Set a tracker for the output, current number of ones and previous number of ones. 
  let prevOnes = 0; 
  let currOnes = 0; 
  let output = 0;  
  // Set a loop going over the nums array. 
  for (let i = 0; i < nums.length; i++){
    let curr = nums[i];

    // If the current number in nums in 1, increment the currOnes variable. This is to keep track of the max number of ones before encountering a single 0. 
    if (curr === 1){
      currOnes++
      // if there is a 0. We reached the maximum amount of 0s we can have for this window. So we need to record the number of 1s we have already accounted for. This is where prevOnes comes into play
    } else {
      // We set prevOnes equal to the value of current ones. Then reset currOnes, to account for all of the 1s that come AFTER the 0 we encoutnerd. This get's reset when we see another 0. 
      prevOnes = currOnes;
      currOnes = 0;
    }
    // Calculate the result and maximum value for every iteration. This will work becuase prevOnes is only updated when we reach a 0. Essentially, this ensures we are only adding counts of 0 when we know there is only 0 zero in the window. if curr is a double 0. currOnes will get updated back to 0 each time. 
    let result = currOnes + prevOnes; 
    output = Math.max(result, output)
  }
// Lastly return the output at the end of the function. 
  return output
};

console.log(longestSubarray([1,1,0,1]))
// output: 3 || Check

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))
// Output: 5 || Check

console.log(longestSubarray([1,1,1,0,0,1,1]))
// // Output: 3 || fail

console.log(longestSubarray([1,1,1,1,1]))
// // Output: 4 || check

// console.log(longestSubarray([0,0,0,0,0]))
// // // Output: 0 || fail

// console.log(longestSubarray([1]))
// // // Output: 0 || fail

// console.log(longestSubarray([1,0,1,0,1,0,1,0]))
// // // Output: 2 // Y

// console.log(longestSubarray([1,1,1,1,0,1,1,1,1,1]))
// // // Output: 9 // X

// console.log(longestSubarray([0,1,1,1,0]))
// // // Output: 3  // Y

// console.log(longestSubarray([1,1,0,1,1,0,1,1,1,0,1]))
// // // Output: 5 

// console.log(longestSubarray([1,1,1,0,1,1,0,1,1,1,1,0,1,1]))
// // // Output: 6

// console.log(longestSubarray([1,0,0,1,1,1,1,1,0,1,1]))
// // Output: 7

// console.log(longestSubarray([0,1,0,1,1,1,0,1,1,0,1,1,1,1,0]))
// // Output: 6 // X

// console.log(longestSubarray([0,1,1,1,1,1]))
// // Output: 5 // X

// Notes v.1:
// use sliding window to calulate total number of 1s in array by removing one zero. 
 // This will be the current length of your window - 1 (to account for the lone zero)
// loop through the array and only slide the window (left most point), IF there is a zero at the right most point. (THIS is the only conidtion for which the window should slide)
// During each iteration, use a Math.max() check against the current total to check for longest subArray. 


// Notes v.2:
// If a 0 is found, increment a Zero count variable. 
// ONLY if there is a second zero found do we move up the left index variable, skip this iteration and try again with the next valid window, The next time we see a 1. 
// OTHERWISE we calulate the difference, based on the current - 0. 


// Notes v.3 
// Push 1(s) to an array. 
// Pop a number from the array if a 0 is found. 


// Code v.1: (30 / 86)
  // var longestSubarray = function(nums) {
  //   let zeroCount = 0
  //   let output = 0
  //   let leftPoint = 0;

  //   for (let i = 0; i < nums.length; i++){
  //     if (nums[i] === 0){
  //       console.log(`Zero Found, update zeroCount`)
  //       zeroCount++;
  //       continue; 
  //     }
  //     if (zeroCount > 1){
  //       leftPoint++;
  //       zeroCount--;
  //       console.log(`Second Zero Found, update zeroCount and slide leftPoint to ${leftPoint}`)
  //       continue; 
  //     }
  //     console.log(`Current iteration ${i}, leftPoint = ${leftPoint}`);
  //     let result = i - leftPoint;
  //     console.log(`Result: ${result}`)
  //     output = Math.max(output, result)
  //   }
  //   return output
  // };