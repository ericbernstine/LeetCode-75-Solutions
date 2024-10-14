var pivotIndex = function (nums) {
  let output = -1;
  let total = nums.reduce((sum, num) => sum + num)
  let left_total = 0
  
  for (let i = 0; i < nums.length; i++){
    let current = nums[i];
    total -= current;
    if (left_total == total){
      output = i;
      break;
    } else {
      left_total += current;
    }
  }
return output
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
console.log(pivotIndex([2,1,-1]));
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
