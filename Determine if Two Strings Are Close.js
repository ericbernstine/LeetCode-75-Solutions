var closeStrings = function (word1, word2) {
  // define your count arrays
  let word2Count = [];
  let word1Count = [];
  // check array length. If they are not the same lengths at the start they can never be close, return false early. 
  if (word1.length !== word2.length) {
    return false;
  }
  // Set your two has maps. 
  let word1Track = new Map();
  let word2Track = new Map();
  // create a function to build said hash maps, be sure to account for duplicates
  const buildMaps = (word, map) => {
    for (let i = 0; i < word.length; i++) {
      let current = word[i];
      // This here checks if a variable has already been seen, if so we increment the current count for that variable
      if (map.has(current)) {
        map.set(current, map.get(current) + 1);
      } else {
        map.set(current, 1);
      }
    }
  };
  buildMaps(word1, word1Track);
  buildMaps(word2, word2Track);
  // create a function to pass over each hash map and push the count of each letter into a seperate array. 
  const buildCounts = (track, arr) => {
    for (let [value, key] of track){
      arr.push(key)
    }
  }
  buildCounts(word1Track, word1Count)
  buildCounts(word2Track, word2Count)
  // Sort each array that's output from the buildCounts function. 
  word2Count.sort((x, y) => x - y)
  word1Count.sort((x, y) => x - y)
  // if the sorted count arrays to not equal one another at any given iteratio, this returns false early. Essentially this is checking if either array have a different number of values at any point. Like this
  // Arr1 = [1, 2, 3] Arr2 = [1, 2, 4]
  // So long as these arrays are sorted we can check if any number is not equal to its respective counterpoint. If any array fails this check, they cannot be 'close' becuase no matter how many operations you make, one letter will always end up with a larger total. 
  for (let i = 0; i < word1Count.length; i++){
    if (word1Count[i] !== word2Count[i]){
      return false;
    }
  };
  // Create a function to check against each hash map. If a letter exits in one word but not the other word this fails the check and cannot be considered 'close'
  const checkValues = (track, word) => {
    for (let [value, key] of track){
      if(!word.includes(value)){
        return false
      }
    }  
  }
  // check the return values for their output and true if no result was returned. You cannot return from a parent function. You can only return from the function scope which is why you need these values.
  if (checkValues(word2Track, word1) == false) {return false}
  if (checkValues(word1Track, word2) == false) {return false}
  return true;
  // Summary: 
  // This problem boils down to checking two things, First. Are the counts of each letter the same. Meaning do we have an even speard of counts. You cannot match strings as close if they both have 6 letters but one has a count of 4 & 2 and the other has a count of 3 & 3. 
 // The second check is to ensure each word has the same values as the other. you cannot match a string to 'abcc' to 'abcz' even though all letters in one are in the other, they do not match both ways. This is why we set up functions to check both words against one another. 
};

// 1.
console.log(closeStrings("abc", "bca"));
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"

// 2.
console.log(closeStrings("a", "aa"));
// Output: false

// 3.
console.log(closeStrings("cabbba", "abbccc"));
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"


console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff"));
// Output: false   // Costs more than two operations 

console.log(closeStrings("abc", "bca"));
// Output: true    (same letters, just reordered)

console.log(closeStrings("aabb", "bbcc"));
// Output: false   (letter sets differ: {a,b} vs {b,c})

console.log(closeStrings("cabbba", "abbccc"));
// Output: true    (same letter set {a,b,c}, frequencies [1,2,3] match)

console.log(closeStrings("cabbba", "aabbss"));
// Output: false   (letter sets differ: {a,b,c} vs {a,b,s})

// Notes v.5 || 71ms & 61.52mb || final: 71ms & 61.41mb
// Refactoring this problem. Use for of instead of forEach on the hash maps, this allows you to exit the function early. 

// Notes v.4 passed all || 318ms & 74.54mb
// This solution worked we just had to check against the sorted arrays and ensure that when sorted each array could be altered to match the same amount of characters at that index. 
// Solution before refactoring below. 

// // Notes v.4 code start
// var closeStrings = function (word1, word2) {
//   const word1Arr = [...word1].sort();
//   const word2Arr = [...word2].sort();
//   let word2Count = [];
//   let word1Count = [];
//   let result = true;
//   if (word1.length !== word2.length) {
//     return false;
//   }
//   let word1Track = new Map();
//   let word2Track = new Map();
//   const buildMaps = (word, map) => {
//     for (let i = 0; i < word.length; i++) {
//       let current = word[i];
//       if (map.has(current)) {
//         map.set(current, map.get(current) + 1);
//       } else {
//         map.set(current, 1);
//       }
//     }
//   };
//   buildMaps(word1Arr, word1Track);
//   buildMaps(word2Arr, word2Track);
//   word2Track.forEach((value, key) => {
//     word2Count.push(value)
//   }); 
//   word1Track.forEach((value, key) => {
//     word1Count.push(value)
//   })
//   word2Count.sort((x, y) => x - y)
//   word1Count.sort((x, y) => x - y)
//   for (let i = 0; i < word1Count.length; i++){
//     if (word1Count[i] !== word2Count[i]){
//       return false;
//     }
//   }
//   word2Track.forEach((value, key) => {
//     if (!word1Arr.includes(key)){
//       result = false
//     }
//   });
//   word1Track.forEach((value, key) => {
//     if (!word2Arr.includes(key)){
//       result = false
//     }
//   });
//   return result;
// };

// Notes v.3. passed (167/ 169)
// Setup below appears to be working but I don't like the numerous forEach loops. I would like to create and push values to the wordCounts while creating the inital map objects. 
// This almost passed without udating how wordCount is created. I believe the only thing I have not accounted for is when a string requires more than two operations. 

// // Notes v.3 code start
// var closeStrings = function (word1, word2) {
//   const word1Arr = [...word1].sort();
//   const word2Arr = [...word2].sort();
//   let word2Count = [];
//   let word1Count = [];


//   let result = true;
//   if (word1.length !== word2.length) {
//     return false;
//   }
//   let word1Track = new Map();
//   let word2Track = new Map();

//   const buildMaps = (word, map) => {
//     for (let i = 0; i < word.length; i++) {
//       let current = word[i];
//       if (map.has(current)) {
//         map.set(current, map.get(current) + 1);
//       } else {
//         map.set(current, 1);
//       }
//     }
//   };
//   buildMaps(word1Arr, word1Track);
//   buildMaps(word2Arr, word2Track);


//   word2Track.forEach((value, key) => {
//     word2Count.push(value)
//   }); 
//   word1Track.forEach((value, key) => {
//     word1Count.push(value)
//   })

//   word2Track.forEach((value, key) => {
//     if (!word1Arr.includes(key) || !word1Count.includes(value)){
//       result = false
//     }
//   });
//   word1Track.forEach((value, key) => {
//     if (!word2Arr.includes(key) || !word2Count.includes(value)){
//       result = false
//     }
//   });

//   return result;
// };
// // Notes v.3 code end

// Notes v.2
// The dumb workaround did not pass.
// Can we sort each word before passing them into the hash map? If so, maybe just compare the counts of each variable and if we can there are only two that need to be changed than we can return true.
// This was close, we need to check that each key (letter) is the same as well as the value (count). There cannot be one count that is not seen in the other. So if one map only has count values of (1, 2) and the other has (1, 3) this fails.

// Notes v.1
// Early checks: If word1 and word2 are not the same length, likely they cannot be 'close' return false early. Why did this pass (110/169) test cases just comparing the length??
// place each letter into their own hash map and compare one string agaist the other. If one string has a value that the other does not, I assume they are not close. return false and check how many test cases.
// That was a dumb idea and did not work ^ passed less test cases than the first.

