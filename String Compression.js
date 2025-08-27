const { start } = require("repl");

var compress = function(chars) {
  // This loop has to work backwards to account for length adjustments while changing the array in place. 
  // We start with (current) the very last value at the end of the array. Also set a count variable, and an Index variable to know where that splice should occur. 
  let current = chars[chars.length - 1]
  // Count is initalized to zero at first to get an accuate count when passing the first letter. It is reset to 1 later on becuase as we pass through the first new letter and have not yet updated current. We still need to count the iteratio we are on. 
  let count = 0
  let startIdx;
  
  // Loop over the chars array, starting at the end of the array. 
  for (let i = chars.length - 1; i >= 0; i--){
    // If the current value is the same as the value we are checking against, increment count. 
    if (chars[i] == current){
      count++
    // If the current value is not, we need to change the current array.
    } else  {
      // Set the start index (splice point) to one past our current iteration (i). Have to account for this as the array is zero indexed.
      startIdx = i + 1;
      // Use splice to mutuate the array in place. 
      chars.splice(
        // The first argument is the starting slice index
        startIdx, 
        // The second argument is how many items you wish to delete, this will be the count, as we only need to keep a single uniquue letter. 
        count, 
        // After removing those items, we will replace them, starting with the current letter and its count.
        current, 
        // Use spread operator to break down the array of nums we will create. 
        // If the count is greater than one we turn that number into a string and use split to turn that into an array. This is to account for double digit+ numbers. 
        // If the count is less than one, we return an empty array. 
        // This works becuase either array we create, either one with numbers or an empty one is broken down to indivudal values with the spread operator (...) to then be spliced back into the chars array. 
        ...(count > 1 ? count.toString().split("") : [])
      )
  // Reset current to the current iteration of chars.
      current = chars[i]; 
      // Reset count to 1, you have to account for the current loop of i. 
      count = 1; 
    }
    // If we reach the end of the loop, the current value will not change. To account for this do a check against i. 
    if (i == 0){
      // Preform the same steps as the ones above, only difference is the start index is already know as we are checking for 0.  
      chars.splice(
        0, 
        count, 
        current, 
        ...(count > 1 ? count.toString().split("") : [])
      )
    }
  }
  return chars
  };

console.log(compress(["a","a","b","b","c","c","c"]))
// 6 = "a2b2c3"

console.log(compress(["a"]))
// 1

console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))
// 4 = 'ab12'


// Notes v.4: 
// Loop through the array. 
// At first encounter of value, mark index and start a count. 
// At last encounter of value, mark index and stop after last count. 
// Splice array between marked values, loop over count if greater than 10 and parse those into the slice function. 
// Need to loop backwards with this method. 
// Can I do this in one loop, or does it need to exit to get new length values

// Notes v.3: 
// Loop through the array. 
// If the current iteration is no longer the same as the previous. Add the start and and end counts to a tracker
// Once looped through the array and tracker is complete. Start splicing from the right hand side to avoid index updates messing with anything. 

//Notes v.2: 
// Loop through the array. 
// When current iteration is no longer the same as the previous
  // Splice the array here. Changing the second and last value of current to the count of current
// Continue steps for each string. 


// Notes v.1: Works, but problem wants array modified in place. 
// Loop through the array. 
// Create a map object that keeps track of each letter and updates it's count. 
// Once looped. create a string with each value in the map object, Ignoring the value if it is only counted once. 
// Write a callbackfunction to use forEach on map Object. 
// Concat those strings togeather and return the string length. 
// Solution v.1:
// var compress = function(chars) {
//     const map = new Map();
//     let outString = ''
//     for (let x in chars){
//       let current = chars[x]; 
//       if (map.has(current)){
//         map.set(current, map.get(current) + 1)
//       } else {
//         map.set(current, 1)
//       }
//     }
//   const createOutString = (value, key) => {
//     if (value == 1){
//       outString += key; 
//     } else {
//       outString += key; 
//       outString += value
//     }
//   }
//   map.forEach(createOutString)
//   return outString.length
// };

