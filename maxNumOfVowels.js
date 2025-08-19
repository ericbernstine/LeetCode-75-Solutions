var maxVowels = function(s, k) {
  let output = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']; 

  // Loop over the first window and calulate the total number of vowels (output) from that window. 
  for (let i = 0; i <= k - 1; i++){
    if (vowels.includes(s[i])){
      output++;
    }
    // if the output is exactly equal to the window, return early as there cannot be a greater total than the window length (k)
    if (output == k){
      return output;
    }
  }
  // Set a temporary output variable (checkOut) to keep the total of the current window
  let checkOut = output;
  // Loop over the rest of the array, i.e. everything to the right of the first window. 
  for (let i = k; i < s.length; i++){
    // set the left pointer to the current iteration (i) - the window (k), this will ensure the left  point is always the correct distance from i, keeping the window the exact length of k every time. 
    let left = i - k; 
    // If the current iteration (s[i]) is a vowel, then increment our temp variable by 1. 
    if (vowels.includes(s[i])){
      checkOut++;
    }
     // If the current left value (s[left]) is also a vowel, then decrement our temp variable by 1. This is because the window is 'losing' a vowel by moving further to the right. 
    if (vowels.includes(s[left])){
      checkOut--
    }
    // We do not need to account for the current variable or left variable if they are not a vowel. 
      // This is becuase we will always subtract our window total (checkOut) if left is vowel, and we will always add to checkOut if our current is a vowel. 
      // The non-vowels are ignored as they do not create any impact regardless of their position. We only need to adjust checkOut if a vowel leaves the window or enters it. 

    // if the output is exactly equal to the window, return early as there cannot be a greater total than the window length (k)
    if (output == k){
      return output
    // Otherwise, we check to see if the current window total is greater than the current output, if it is, update output. 
    } else {
      output = Math.max(checkOut, output)
    }
  }
  return output
};

console.log(maxVowels("tryhard", 3))
// output = 3 | "iii"

// ---!!!! Baseline sanity !!!!---
// PASSED

// console.log(maxVowels("a", 1))
// // output = 1 | single vowel

// console.log(maxVowels("b", 1))
// // output = 0 | single consonant

// console.log(maxVowels("ab", 2))
// // output = 1 | "ab" → a

// console.log(maxVowels("abc", 3))
// // output = 1 | only 'a'

// // --- k at extremes (k = 1 and k = |s|) ---
// console.log(maxVowels("leetcode", 1))
// // output = 1 | any single position, best is a vowel

// console.log(maxVowels("leetcode", 8))
// // output = 4 | count all vowels in entire string


// ---!!!! Vowels clustered vs. spread !!!!--- 
// PASSED

// console.log(maxVowels("aeiobcdfg", 5))
// // output = 4 | "aeiob" → 4

// console.log(maxVowels("bcdfgaeiou", 5))
// // output = 5 | tail "aeiou" → 5

// console.log(maxVowels("aaaaab", 5))
// // output = 5 | first window already max (all vowels)

// console.log(maxVowels("baaaaa", 5))
// // output = 5 | windows hit five a’s


// ---!!! Alternating / patterned (checks add/subtract correctness) !!!---
//PASSED

// console.log(maxVowels("abababab", 3))
// // output = 2 | windows like "aba" → 2

// console.log(maxVowels("babababa", 4))
// output = 2 | windows like "baba" → 2


// --- Vowels only at edges (tests left-removal logic) ---
// PASSED

// console.log(maxVowels("abbbbba", 3))
// // output = 1 | any length-3 window has at most one 'a'

// console.log(maxVowels("abbbbbbbbbbe", 10))
// // output = 1 | leftmost 'a' or rightmost 'e', never both in same 10-window

// // --- Long runs of consonants / zeros inside windows ---
// console.log(maxVowels("rhythms", 4))
// // output = 0 | no vowels

// console.log(maxVowels("pqrst", 1))
// // output = 0 | no vowels

// --- Windows crossing big vowel blocks (off-by-one traps) ---
// PASSED

console.log(maxVowels("abciiidef", 3))
// output = 3 | "iii"

console.log(maxVowels("weallloveyou", 7))
// output = 4 | "loveyou" → o,e,o,u

console.log(maxVowels("zzzaeiouzzz", 5))
// output = 5 | centered vowel block

console.log(maxVowels("zaeiouzz", 4))
// output = 4 | windows inside "aeiou"


//Notes: 

// Need one loop to go over the entire array, and need another loop to account for the current window. 
// Maybe a while loop on the outside, stoping when end = s.length, and a for loop on the inside starting at the current start variable 

// Solution below works, just needs to be O(n)

// var maxVowels = function(s, k) {
//   let output = 0
//   const vowels = ['a', 'e', 'i', 'o', 'u']; 
//   let start = 0
//   let end = k - 1; 
//   while (end < s.length){
//     let tempOutput = 0
//     for (let i = start; i <= end; i++){
//       if (vowels.includes(s[i])){
//         tempOutput++;
//       }
//     }
//     output = Math.max(output, tempOutput)
//     if (output === k) return output;
//     start++
//     end++
//   }
//   return output
//};