/*

Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
*/ 

var arrOutput;
function uniteUnique(arr) {
  arrOutput = [];
  for(let arrItem of arguments){

     getUniqueArr(arrItem);
  }

  return arrOutput;
}
function getUniqueArr(subArr){ 

    for(let elem of subArr) {
      if(arrOutput.indexOf(elem) == -1){
          arrOutput.push(elem);
      }
    }
}

uniteUnique([1, 2, 3], [5, 2, 1]);
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
