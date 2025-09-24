var productExceptSelf = function(nums) {
  // define three arrays, one for the output, the other two for the left and right totals. 
  let output = [];
  let ansLeft = []; 
  let ansRight = [];
  // For answer left, set the left most point to one. This ensures that the first integer within nums is handled correctly. 
  // Since there is nothing to the left of the first integer within nums, it should be multiplied by 1 to ensure the value remains unchanged. 
  ansLeft[0] = 1
  for (let i = 1; i < nums.length; i++){
    // Now set the current iteration of ansLeft to the last added value (left total so far) Multiplied by the current iteration of nums. It is set to nums[i - 1] to account for the start value being 1. Essentialy the each iteration does this for array [2,3,4]. 
    // ansLeft[0] = 1 (this first value is carried over to the next iteration)
    // ansLeft[1] = 1 * 2 (first nums values)
    // ansLeft[2] = 2 * 3 (second nums value)
    // nums.length is 3, so we exit the loop. There is nothing past value 4 anyways. 
    ansLeft[i] = ansLeft[i - 1] * nums[i - 1]
  }
  // Now we are doing the same process as above only in reverse. 
  // Set answer right equal to the current nums array with 1 added to the end. We need to account for this extra array number so after the loop we will use shift() to remove that first array num. 
  // We need to do this to ensure there are actual values at each given iteration (i) when updating the ansRight array. if you try and do this without values already in the array it will return NaN as there are no values at ansRight[2] becuase the array is still empty. 
  ansRight = [...nums, 1]
  for (let i = nums.length - 1; i > 0; i--){
    // Now set each iteration equal to the number furthest to the right mutlipled by the currernt iteration of nums(i). For array [2,3,4] + 1 (we add this at the end) it would look something like this. 
    // ansRight[@end] = 1
    // ansRight[@end-1] = 1 * 4
    // ansRight[@end-2] = 4 * 3
    // we are now at nums[0] and here we want to exit the array
    ansRight[i] = ansRight[i + 1] * nums[i]
  }
  // remember to account for 1 we added at the beginning, remove the first element from the array. 
  ansRight.shift()
  for (let i = 0; i < ansLeft.length; i++){
    // Now we need to build the output array. This is done my multiplying the current left and right values at each given iteration. This avoids including the current iteration of nums, becuase it is calulating the left and right totals up to the point of nums[i], essentially multiplying the totals of everything around nums[i]
    output.push(ansLeft[i] * ansRight[i])
  }
  return output
};

//console.log(productExceptSelf([2,3,4]))
// AnsLeft:                    [1,2,6]
// AnsRight:                   [12,4,1]
// Output: [12, 8, 6]

//console.log(productExceptSelf([1,2,3,4]))
// Output: [24,12,8,6]

console.log(productExceptSelf([-1,1,0,-3,3]))
// Output: [0,0,9,0,0]

// First we will need to create a Prefix sum array to confirm algo logic. 
  // can create an ouput array for this problem. 

// Notes v.1
// Spread the array with a duplicate of itself. 
// This will create a circular array and allow us to grap the product without hacing to search or store values backwards
// [1,2,3,4,1,2,3,4] - This may allow us to skip over the current array iteration and calualte the value for the next 3. 
// Try and make a prefix product algo first without ignoring any integers. 

// Notes v.2 
// Not possible with the circular method. We will need to calulate the prefix product to the right and left of the current iteration. If easier, practice with a prefix sum left and right approach first. 
// Create an array of answers with each total as we pass through each given index. 
// Loop through nums a second time after generating the answers array and use those values as your left point and right point totals. 

// Notes Final: 
// The idea here is to create two arrays before creating an output. A left total array - which is the 
// product of every integer to the left and a right total array - which is a product of everything to the right
// Then multiply those numbers numbers togeather at the current iteration. This effectively multiples everything to the left of that current point with everything to the right. 