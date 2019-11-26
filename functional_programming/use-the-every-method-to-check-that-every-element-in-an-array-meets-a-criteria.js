function checkPositive(arr) {
    // Add your code below this line
  //return arr.every(item => (item > 0) )
  return arr.every(item => (item > 0) ? true : false)
  
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  