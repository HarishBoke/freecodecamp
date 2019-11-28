function sumAll(arr) {
    let sum = 0;
    let newArr = arr.sort((a,b) => a-b);
  
    for(let i = newArr[0]; i <= newArr[1]; i++) {
        sum += i
    }
    return sum
  }
  
  sumAll([1, 4]);
  