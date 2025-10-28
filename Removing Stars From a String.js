var removeStars = function (s) {
  // set an empty array to account for characters passed over in string s
  let out = []
  // set a for loop to pass over string s
  for (let i = 0; i < s.length; i++){
    // If the current character in string s is equal to *, remove the last character we added to the out array, if it not, push that character to the out array. 
    // This will account for all characters in O(n). If multiple stars in a row our found, we will keep remvoing the last element at the to top of the stack. 
    s[i] == "*" ? out.pop() : out.push(s[i])
    // This ternary operator is doing the same thing as this. 
    // if (s[i] == "*"){
    //   out.pop()
    // } else {
    //   out.push(s[i])
    // }
  }
  // Return the rejoined array as a string. 
  return out.join('')
};


// Notes v.1 // v.1 Passed = 14ms runtime, 67.99mb of memory 
// We don't actually need a stack DS for this problem we can just use an array. 
// Parse the array normally from bottom to top
// Pop() the element if it is equal to * then search the array and pop() the next character closest to the top
  // Use a simple check if pop() == * -> If it does, remove the character at count - 1; 
// If a * is found, we need to start the loop again?
// Repeat this process until no *'s are left and return the array as a string. 

//console.log(removeStars('leet**cod*e'))
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".

//console.log(removeStars('erase*****'))
// Output: ""

// Star at the beginning (shouldn’t do anything extra since nothing to remove)
console.log(removeStars("*abc"));
// Output: "abc"

// Interleaved stars and letters
console.log(removeStars("a*b*c*d*"));
// Output: ""

// Stars only after full words
console.log(removeStars("star*man*"));
// Output: "ma"

// Long alternating pattern
console.log(removeStars("a*b*c**d***e"));
// Output: ""

// String with no stars at all
console.log(removeStars("hello"));
// Output: "hello"

// Star removes the last character
console.log(removeStars("hell*"));
// Output: "hel"

// Very large input edge case (performance test)
console.log(removeStars("a".repeat(100000) + "*".repeat(99999))); 
// Output: "a"