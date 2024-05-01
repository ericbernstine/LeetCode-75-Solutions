function isSubsequence(s, t) {
  // declare local variables
  let output = true;
  let sArr = s.split('');
  let tArr = t.split('')
  // checkArr not needed for refactored solution, but this solution runs faster on leetcode with it for some reason?? Regardless, checkArr is not needed. 
  let checkArr = [];
  let count = 0;

  // for loop to compare elements
  for (let j = 0; j < t.length; j++){
    let current = tArr[j];
    // if x element in t, equals s[0], increase count by 1
    if (current == sArr[count]){
      count++
      checkArr.push(current);
    }
  }
  // if count doesnt equal the length of s's og array, result is false; 
  if (count !== sArr.length){
    output = false;
  }
    return output;
}

console.log(isSubsequence("ab", "baab"));
// //output: true

console.log(isSubsequence("acb", "ahbgdc"));
// //output: false

console.log(isSubsequence("aaaaaa", "bbaaaa"));
// //output: false

//console.log(isSubsequence("rjufvjafbxnbgriwgokdgqdqewn", "mjmqqjrmzkvhxlyruonekhhofpzzslupzojfuoztvzmmqvmlhgqxehojfowtrinbatjujaxekbcydldglkbxsqbbnrkhfdnpfbuaktupfftiljwpgglkjqunvithzlzpgikixqeuimmtbiskemplcvljqgvlzvnqxgedxqnznddkiujwhdefziydtquoudzxstpjjitmiimbjfgfjikkjycwgnpdxpeppsturjwkgnifinccvqzwlbmgpdaodzptyrjjkbqmgdrftfbwgimsmjpknuqtijrsnwvtytqqvookinzmkkkrkgwafohflvuedssukjgipgmypakhlckvizmqvycvbxhlljzejcaijqnfgobuhuiahtmxfzoplmmjfxtggwwxliplntkfuxjcnzcqsaagahbbneugiocexcfpszzomumfqpaiydssmihdoewahoswhlnpctjmkyufsvjlrflfiktndubnymenlmpyrhjxfdcq"));
// //output: false
