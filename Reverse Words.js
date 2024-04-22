function reverseWords(string){
  let splitString = string.split(" ")
  let output = [];
  for (let i = splitString.length - 1; i >= 0; i--){
    if (splitString[i] != ""){
      output.push(splitString[i])
    }
  }
  return output.join(' ');
}

console.log(reverseWords("a good   example"))
// output: "good example a"

//case 2
console.log(reverseWords("  hello world  "))
// output: "world hello"