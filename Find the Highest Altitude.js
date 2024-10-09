var largestAltitude = function (gain) {
    // define difference and highest variables
    let diff = 0;
    let highest = 0;
    // trad for loop for faster run time. 
    for (let i = 0; i < gain.length; i++) {
        // add the current iteration to the diff variable
        diff += gain[i];
        // if the current differnce is greater than the current highest var, make highest = diff
        if (diff > highest) highest = diff;
    }
    return highest;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
expected: 1

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]));
expected: 0
