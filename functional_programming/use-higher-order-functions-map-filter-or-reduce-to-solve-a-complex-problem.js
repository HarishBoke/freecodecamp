const squareList = (arr) => {
    // only change code below this line
    let output = arr
    .filter( num => num > 0 && Number.isInteger(num))
    .map( num => num*num)
    
    return output;
    // only change code above this line
  };
  
  // test your code
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  