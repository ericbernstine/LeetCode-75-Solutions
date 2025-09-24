var uniqueOccurrences = function(arr) {
  // create the three needed variables. An array to check against, a result variable and a Map, in this case (tracker)
  let checkArr = [];
  let result = true; 
  let tracker = new Map();
  // Loop over the orignal array
  for (let i = 0; i < arr.length; i++){
    // If a value was already added to the tracker, Set that value by getting its current count (value) and updating it by one. 
    if (tracker.has(arr[i])){
      tracker.set(arr[i], (tracker.get(arr[i]) + 1))
    // If the value has not been seen already then add that value to the tracker by using set()
    } else {
      tracker.set(arr[i], 1)
    }
  }
  // Create the function to plug into the for each. Remember that key and map, although not used are the default parameters for this. Even if you pass different values as parameters they will still use the corresponding values in that order. 
  let checkDupes = (value, key) => {
  // If we have already seen a value (count) within the checkArr, that means there is already a number with the same amount of occurrences so we alter the result value to false as there is no longer a unique number of occurrences for every number. 
    if (checkArr.includes(value)){
      result = false;
    } 
  // Always push the current value to the array
    checkArr.push(value)
  }
  // Run the checkDupes function against the entire tracker and return the results. 
  tracker.forEach(checkDupes)
  return result
};

console.log(uniqueOccurrences([1,2,2,1,1,3]))
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

console.log(uniqueOccurrences([1,2]))
// Output: false

console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))
// Output: true

// Notes v.1 & Final Notes
// Create a map object and loop through the entire array. If a new value is found add it to the map, if it is an existing value, update the current count of said integer
// Now use a secong loop going over the Map object values. Each value we loop over is checked against an array to see if we have already come across it, if so, exit the loop early and return false. If not, add the value to the array and keep checking. 
// Return true by default and only return false if a repeat value is found while looping over the mapped values. 
// Update: You cannot exit a forEach loop early when using it with a map object. Cannot use continue, return or break. 