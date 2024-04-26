function moveZeroes(nums){
  let correctOrder = [];
  let count = 0;
  // First loop to create the start of the correct order with no 0's
  for (let i = 0; i < nums.length; i++){
    let current = nums[i];
    if (current !== 0){
      correctOrder.push(nums[i])
    } else {
      count++
    }
  }
  // Second loop that pushes the correct amount of 0's to the end of the correct order array 
  for (let j = 0; j < count; j++){
    correctOrder.push(0)
  }
  // Final loop that matches the current index num to that of the corrected order. 
  for (let k = 0; k < nums.length; k++){
    nums[k] = correctOrder[k]
  }
  // return the original nums passed in
  return nums;
}

console.log(moveZeroes([0,1,0,3,12]))
//output: [1,3,12,0,0]