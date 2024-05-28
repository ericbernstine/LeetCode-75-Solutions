function maxOperations(nums, k){
  // declare function scope vars. 
  let leftP = 0;
  let rightP = nums.length - 1;
  let count = 0;
  // use sort to place nums array in  numerical order. 
  nums.sort((x, y) => x - y);
  // while loop using two pointer technique. 
  while (leftP < rightP){
    //if pointers add up to K, increment count and move both pointers bc we only match once.  
    if (nums[leftP] + nums[rightP] == k){
      // console.log(`Count changed at ${nums[leftP]} and ${nums[rightP]}`)
      count++;
      rightP--;
      leftP++;
      // if the sum of pointers is greater than K, move right pointer (get lower numbers)
    } else if (nums[leftP] + nums[rightP] > k){
      rightP--;
      // if the sum of pointers is less than K, move left pointer (get higher numbers)
    } else {
      leftP++;
    }
  }
  return count;
}

console.log(maxOperations([1,2,3,4], 5))
// 2 

console.log(maxOperations([3,1,3,4,3], 6))
//1

console.log(maxOperations([4,4,1,3,1,3,2,2,5,5,1,5,2,1,2,3,5,4], 2))
// 2

console.log(maxOperations([2,2,2,3,1,1,4,1], 4))
// 2