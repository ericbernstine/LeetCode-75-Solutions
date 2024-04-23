function canPlaceFlowers(flowerbed, n){
  let possiblePositions = 0;
  for (let i = 0; i < flowerbed.length; i++){
    let current = flowerbed[i];
    let previous = flowerbed[i - 1];
    let nextUp = flowerbed[i + 1];
    // Check case for array start
    if (flowerbed.length === 1 && current === 0){
        possiblePositions +=1; 
    }
    if (i == 0){
      if (current === 0 && nextUp === 0){
        flowerbed[i] = 1;
        possiblePositions +=1; 
      }
    }
    //check case for array end 
    if (i == flowerbed.length - 1){
      if (current === 0 && previous === 0){
        flowerbed[i] = 1;
        possiblePositions +=1; 
      }
    }
    // Main function elemetns
    if (current === 0 && previous === 0 && nextUp === 0){
      flowerbed[i] = 1;
      possiblePositions += 1; 
    }
  }
  if (n <= possiblePositions){
    return true; 
  } else {
    return false
  }
}

console.log(canPlaceFlowers([0], 1));
// expected output: true