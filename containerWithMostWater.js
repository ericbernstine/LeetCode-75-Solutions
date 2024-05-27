function maxArea (height){
  // define function scope variables, set pointers
  let max = 0;
  let left = 0;
  let right = height.length -1; 
  console.log(right)
  // while loop; used to compare pointers.
  while(left < right){
    // set local scope variables
    let current;
    let differnce = right - left;
    // if left pointer is less than right pointer, calculate current(maxArea), move left pointer up
    if (height[left] <= height[right]){
      current = height[left] * differnce;
      left++;
    // if right pointer if less.
    } else {
      current = height[right] * differnce;
      right--;
    }
    // check if current is greater than current max, if so, updated max
    if (current >= max){
      max = current
    }
  }
  return max;
}
  

//console.log(maxArea([1,8,6,2,5,4,8,3,7]))
//49

//console.log(maxArea([1,1]))
// 1

//console.log(maxArea([4,3,2,1,4]))
// 16

console.log(maxArea([2,3,4,5,18,17,6]))
// 17