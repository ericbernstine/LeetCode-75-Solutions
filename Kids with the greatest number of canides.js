function kidsAndCandies(candies, extraCandies){
  let greatest = 0;
  for (let i = 0; i < candies.length; i++){
    if (candies[i] > greatest){
      greatest = candies[i];
    }
  }
  const compArr = candies.map((num) => num += extraCandies)

  function check(current){
    if (current >= greatest){
      return true;
    } else {
      return false;
    }
  }
  let output = [];
  for (let i = 0; i < compArr.length; i++){
    output.push(check(compArr[i]))
  }
  return output;
}


console.log(kidsAndCandies([2,3,5,1,3], 3))
// expected: [true,true,true,false,true]

//case 2
console.log(kidsAndCandies([4,2,1,1,2], 1))
// expected: [true,false,false,false,false] 


console.log(kidsAndCandies([12,1,12], 10))
// expected: [true,false,true]