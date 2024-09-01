// Differce of two arrays

// xxxx v.1 xxxx

// - loop through nums1 
// - if nums1[i] !exist in arr2 
//   - push nums1[i] to output_1

// loop through nums2
// - if nums2[i] !exist in arr1 
// - push nums2[i] to output_2

// push output_1 & output_2 into another arr;


var findDifference = function(nums1, nums2) {
  // define function scope vars.
  let output_1 = [];
  let output_2 = [];
  let output_final = [];
  
  for (let x in nums1){
    // set vars for curreant iteration and bool value 
    // checking if current exists in nums2.
    let current = nums1[x];
    let this_bool = nums2.includes(current);

    // if bool value is true, skip iteration.
    if (this_bool){
      continue
    } else {
      // check if output_1 already has current, if not push current to 
      // output_1. 
      if (output_1.includes(current)){
        continue
      } else {
        output_1.push(current);
      }
    }
  }

  for (let y in nums2){
    let current = nums2[y];
    let this_bool = nums1.includes(current);
    if (this_bool){
      continue;
    } else {
      if (output_2.includes(current)){
        continue;
      } else {
        output_2.push(current);
      }
    }
  }
  output_final.push(output_1);
  output_final.push(output_2);
  return output_final;
};


console.log(findDifference([1,2,3], [2,4,6]))
//case 1: 
// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]

console.log(findDifference([1,2,3,3], [1,1,2,2]))
// case 2:
// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]