var findMaxAverage = function(nums, k) {
  // declare function variables
  let init_sum = 0;
  let max_avg;
  // find average of first window (first sub array of k)
  for (let i = 0; i < k; i++){
    init_sum += nums[i]
  };
  init_avg = init_sum / k;
  max_avg = init_avg;
  // slide window, remove furthest left elem of window (sub array), and add newest right elem to the end of the window, calculate new avg in getAvg() function.
  for (let i = k; i < nums.length; i++){
    let new_sum = init_sum - nums[i - k] + nums[i]; 
    init_sum -= nums[i - k];
    init_sum += nums[i]
    let new_avg = new_sum / k; 
    if (new_avg > max_avg) max_avg = new_avg
  }
  return max_avg;
};

//console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
// Output: 12.75000
// Explanation: 
//Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

// Input: nums = [5], k = 1
// Output: 5.00000

console.log(findMaxAverage([4,2,1,3,3], 2))
// Output: 3.00
