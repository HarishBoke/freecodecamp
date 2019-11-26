var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
    let newArr = [...arr].sort();

     return newArr;
  // Add your code above this line
}
nonMutatingSort(globalArray);


/// mehtod 2

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
    let newArr;
      newArr = [].concat(arr).sort();
     return newArr;
  // Add your code above this line
}
nonMutatingSort(globalArray);
