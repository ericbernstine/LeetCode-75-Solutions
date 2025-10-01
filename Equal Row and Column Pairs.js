var equalPairs = function (grid) {
  // First step is to make an array of arrays containg all column values from the matrix. A matrix looks like this example below. 
  // [ 13 | 13 ]
  // [ 13 | 13 ]
  let columnGrid = []
  let total = 0
  // Loop over the current grid variable which is the array of rows. 
  for (let i = 0; i < grid.length; i++){
    let result = []; 
    // You have to use a nested loop to account for each number witin the array of arrays
    for (let x = 0; x < grid.length; x++){
      // this will grab the correct varaible by first accesing  the innerloop to ensure we are wihtin the correct array, then grab [i] which is the outerloop variable to ensure we are grabbing the correct spot within that array
      result.push(grid[x][i])
    }
    // push those values into the column array and reset the result array to be empty.
    columnGrid.push(result)
    result = [];
  }
  // create hash maps for both columns and rows
  let rowMap = new Map(); 
  let colMap = new Map();
  // A basic function setting each array as a value
  const createMap = (map, arr) => {
    for (let i = 0; i < arr.length; i++){
      let curr = arr[i].toString(); 
          map.set(i, curr)
    }
  }
  createMap(rowMap, grid)
  createMap(colMap, columnGrid)
  // This is where the meat of this function lies. We have to compare each value in rows with each value in columns. To do this we have to use an inner loop (currently don't know how to preform this with onlt one loop) 
  // We cannot use has or get to check against any array values within the map. This is becuase arrays are a refrence type. A refrence is a value of memory, not a value of data. 
 // a = 10, b = a, b = 20, print(a) = 10
// a = [1, 2], b = a, b.push(3), print(a) = [1, 2, 3]
  for (let [value, key] of rowMap){
    let currRow = key
    for (let [value, key] of colMap){
      let currCol = key; 
      if (currCol == currRow){
        // if both the current column and current row line up, increment total by one. 
        total++
      }
    }
  }
  return total;
};

console.log(equalPairs([[13,13],[13,13]]));
// Output: 4

console.log(equalPairs([[3,1,2,2],[1,4,4,4],[2,4,2,2],[2,5,2,2]]));
//                     [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,5,2,2]]
// Output: 3

console.log(equalPairs([[1,2],[1,2]]));
// Output: 0

console.log(equalPairs([[1,2],[3,4]]));
// Output: 0

console.log(equalPairs([[1]]));
// Output: 1

console.log(equalPairs([[3, 1, 2, 2],[1, 4, 4, 5],[2, 4, 2, 2], [2, 4, 2, 2],]));
// Arr of columns: [[3, 1, 2, 2], [1, 4, 4, 4], [2, 4, 2, 2], [2, 5, 2, 2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// Notes v.1 
// We need to build an array of arrays that contain each column value within the grid to compare against the current array of rows (passed by default as 'grid'). 
// First thoughts, we do not need a hashmap for this, just build a second array of columns and if that same array is present witihin the array of rows, increment a count and return that. 
// THINGS I NEED TO CHECK: 
// Does include work on an entire array while searching an array of arrays? if so this should work. 
// If this does work, I need to account for when rows are present multiple times. This should work as long as I check rows that exist within columns? Or do I need to check both? 

// Notes v.2
// Using includes() on an array of arrays does not work. 
// New plan. make two hash maps, one for rows, one for columns, if one has the other, increment a count. 
// THINGS I NEED TO CHECK: 
// Will this still work with one passing over the other, or do I need to pass both ways?
// If I convert the array of arrays to a string? Can I use includes() then?

// Notes v.3 
// You cannot use has() or get() to check agaianst an ARRAY value within a hash map. 
// Not sure why this is considered a hash map problem. Can I use a reguualr object instead and increment count that way?
// OR would it be better to create one array containing both columns and rows, sort it, and if the current value equals the previous, we incement count and use a Math.max() check against the total. 
// The array won't work because you will pick up on duplicate values that exist within one but not the other. Duplicates in rows, but not in columns. 

// Notes v.4
// We do have to check both ways, rows against colums, columns against rows. 
// Seems like the best option is to just create a nested loop, comparing values against one another. Used hint #1, said nested loops are possible. Need to create arrays of mapped keys from both the cols and rows, then use a nested loop to compare the two. 